<script lang="ts">
	import { fly } from 'svelte/transition'
	import URL from '$lib/url'
	import { page } from '$app/stores'
	import PCard from '$lib/layouts/placeholder/P_Card.svelte'
	import utils from '$lib/utils'
	import PlaceholderComment from '$lib/layouts/placeholder/PlaceholderComment.svelte'
	import ViewComment from '$lib/components/ui/ViewComment.svelte'
	import Card from '$lib/layouts/Card.svelte'
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'

	interface Data {
		data: {
			author: string
			created: string
			body_html: string
			ups: string
		}
		selftext_html: string
		selftext: string
		title: string
		id: string
		author: string
		subreddit: string
		created: string
		ups: string
		num_comments: string
		post_hint: string
		domain: string
		url: string
		author_premium: string
		is_video: string
		over_18: string
		total_awards_received: string
		media: {
			reddit_video: {
				height: string
				width: string
				hls_url: string
				fallback_url: string
			}
		}
		preview: {
			images: {
				resolutions: { url: string }[]
				source: { url: string }
			}[]
		}
		thumbnail: string
	}

	let postdata: Data[] = []
	let postcomment: Data[] = []

	let introAnimated = false
	let loaded = false

	if ($page.params.id === 'null') goto('__error.svelte')

	async function load() {
		const res = await fetch(URL + $page.params.id + '.json?raw_json=1')
		const data = await res.json()

		postdata.push(data[0].data.children[0].data)
		data[1].data.children.forEach((data: any) => postcomment.push(data))
		loaded = true
		introAnimated = true
	}
	setTimeout(() => {
		if (!introAnimated) {
			browser && load()
		}
	}, 1000)
</script>

<section in:fly={{ y: 200, duration: 450 }} out:fly={{ y: -200, duration: 450 }} on:introend={load}>
	{#if !loaded}
		<PCard />
	{:else}
		{#each postdata as data}
			<Card
				id={data.id}
				uname={data.author}
				author_premium={data.author_premium}
				subreddit={data.subreddit}
				date={utils.unix(data.created).now()}
				is_video={data.is_video}
				over_18={data.over_18}
				total_awards_received={data.total_awards_received}
				title={data.title}
				selftext={data.selftext_html}
				ups={utils.numberFormat(data.ups).format()}
				num_comments={utils.numberFormat(data.num_comments).format()}
				post_hint={data.post_hint}
				domain={data.domain}
				url={data.url}
				vdo_h={data.media?.reddit_video.height}
				vdo_w={data.media?.reddit_video.width}
				vdo_src={data.media?.reddit_video.fallback_url}
				img_src={data.preview?.images[0].source.url}
				thumbnail={data?.thumbnail}
				overrideClass
				class={'-mx-2 p-6 space-y-4'}
			/>
		{/each}
	{/if}
</section>
<!-- Comments -->
<section
	in:fly={{ y: 200, duration: 450, delay: 250 }}
	out:fly={{ y: -200, duration: 450, delay: 250 }}
	class="px-2 pb-24 space-y-4"
>
	<div class="divider px-6">Comments</div>
	{#if !loaded}
		<PlaceholderComment />
	{:else}
		{#each postcomment as comment}
			<ViewComment
				author={comment.data.author}
				created={comment.data.created}
				comment={comment.data.body_html}
				ups={utils.numberFormat(comment.data.ups).format()}
			/>
		{/each}
	{/if}
</section>
