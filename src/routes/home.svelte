<script lang="ts">
	import Card from '$lib/layouts/Card.svelte'
	import PCard from '$lib/layouts/placeholder/P_Card.svelte'
	import { NumberFormat, momentUpdateLocale, UNIXTSReadable } from '$lib/utils'
	import URL from '$lib/url'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { fly } from 'svelte/transition'
	import { browser } from '$app/env'

	let postdata: {
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
	}[] = []
	let loaded = false
	let animationEnded = false

	async function load() {
		// if (localStorage.getItem('postdata')) {
		// 	loaded = true
		// 	const dumpArray = []
		// 	return postdata.push(...JSON.parse(localStorage.getItem('postdata') || ''))
		// }
		const res = await fetch(URL + '.json?raw_json=1&sort=' + $page.url.searchParams.get('sort'))
		const data = await res.json()

		data.data.children.forEach((data: { data: any }) => postdata.push(data.data))
		loaded = true
		localStorage.setItem('postdata', JSON.stringify(postdata))
	}
	let introAnimated = false
	const startData = () => {
		introAnimated = true

		if (!localStorage.getItem('username')) return goto('/')

		momentUpdateLocale()
		load()
	}
	// If the the page is reloaded then animation wont happen so call load() manually
	setTimeout(() => {
		if (!introAnimated) browser && startData()
	}, 1000)

	const noOfPlaceholders = Array(3)
</script>

<h1 class="text-4xl font-light px-4 py-6">New posts from Reeddit</h1>
<section in:fly={{ y: 200, duration: 450 }} on:introend={startData} class="px-2 pb-24 space-y-4">
	{#if !loaded}
		{#each noOfPlaceholders as _}
			<PCard />
		{/each}
	{:else}
		{#each postdata as data}
			<Card
				id={data.id}
				uname={data.author}
				author_premium={data.author_premium}
				subreddit={data.subreddit}
				date={UNIXTSReadable(data.created)}
				is_video={data.is_video}
				over_18={data.over_18}
				total_awards_received={data.total_awards_received}
				title={data.title}
				selftext={data.selftext_html}
				ups={NumberFormat(data.ups)}
				num_comments={NumberFormat(data.num_comments)}
				post_hint={data.post_hint}
				domain={data.domain}
				url={data.url}
				vdo_h={data.media?.reddit_video?.height}
				vdo_w={data.media?.reddit_video?.width}
				vdo_src={data.media?.reddit_video?.fallback_url}
				img_src={data.preview?.images[0].resolutions[3]?.url}
				thumbnail={data?.thumbnail}
			/>
		{/each}
	{/if}
</section>
