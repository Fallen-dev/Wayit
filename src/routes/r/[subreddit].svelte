<script lang="ts">
	import { browser } from '$app/env'
	import { page } from '$app/stores'
	import Card from '$lib/layouts/Card.svelte'

	import PlaceholderCatagoryCard from '$lib/layouts/placeholder/PlaceholderCatagoryCard.svelte'
	import PCard from '$lib/layouts/placeholder/P_Card.svelte'
	import URL from '$lib/url'
	import utils from '$lib/utils'
	import { fly } from 'svelte/transition'

	let subredditInfo: {
		active_user_count: string
		advertiser_category: string
		banner_img: string
		created: string
		description_html: string
		display_name: string
		header_img: string
		icon_img: string
		id: string
		lang: string
		name: string
		over18: string
		public_description_html: string
		restrict_commenting: string
		submit_text_html: string
		subreddit_type: string
		subscribers: string
		title: string
	}[] = []
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
	let postLoaded = false
	let introAnimated = false

	async function load() {
		const res = await fetch(URL + `r/${$page.params.subreddit}/about.json?raw_json=1`)
		const data = await res.json()

		subredditInfo.push(data.data)
		localStorage.setItem('subredditInfo', JSON.stringify(subredditInfo))

		loaded = true
		introAnimated = true
	}
	async function loadPost() {
		const postRes = await fetch(URL + `r/${$page.params.subreddit}.json?raw_json=1`)
		const postData = await postRes.json()

		postData.data.children.forEach((pdata: { data: any }) => postdata.push(pdata.data))
		postLoaded = true
		introAnimated = true
	}
	setTimeout(() => {
		if (!introAnimated) {
			browser && load()
			browser && loadPost()
		}
	}, 1000)
	const noOfPlaceholders = Array(3)
	let clickToShowInfo: boolean
</script>

<section in:fly={{ y: 200, duration: 450 }} on:introend={load}>
	{#if !loaded}
		<PlaceholderCatagoryCard />
	{:else}
		{#each subredditInfo as data}
			<div class="p-6 bg-base-100">
				<div class="space-y-6 text-center">
					<div class="avatar flex items-center justify-between gap-6">
						<div class="text-sm mt-auto">
							<p class="font-bold">{utils.numberFormat(data.subscribers).format('standard')}</p>
							Subscribers
						</div>
						<div
							class="w-24 rounded-full bg-base-300 ring ring-offset-2ring ring-primary ring-offset-base-100 ring-offset-2"
						>
							{#if data.icon_img}
								<img src={data.icon_img} alt="" />
							{/if}
						</div>
						<div class="text-sm mt-auto">
							<p class="font-bold">
								{utils.numberFormat(data.active_user_count).format('standard')}
							</p>
							Active users
						</div>
					</div>
					<div>
						<h4 class="text-xl font-bold">{data.title}</h4>
						<p>r/{data.display_name}</p>
					</div>
					<div>{@html data.public_description_html || 'No public description'}</div>
					<div class="&flexbox justify-center gap-6 flex-wrap">
						<button
							on:click={() => {
								clickToShowInfo = !clickToShowInfo
								// if (clickToShowDesc) return (clickToShowDesc = false)
								// return
							}}
							class="btn btn-sm rounded-full normal-case"
						>
							{clickToShowInfo ? 'Hide' : 'Show'} more info
						</button>
					</div>
					{#if clickToShowInfo}
						<div class="space-y-4 text-left">
							<p>Created on {utils.unix(data.created).unixFormat()}</p>
							<p>Channel type: {data.subreddit_type}</p>
							<p>Channel id: {data.id}</p>
							<p>Advertiser category: {data.advertiser_category}</p>
							<p>Language: {data.lang}</p>
							<div class="divider">Description</div>
							{@html data.description_html}
						</div>
					{/if}
				</div>
			</div>
		{/each}
	{/if}
</section>
<div class="divider px-6" />
<section
	in:fly={{ y: 200, duration: 450, delay: 500 }}
	class="px-2 pb-26 space-y-6"
	on:introend={loadPost}
>
	{#if !postLoaded}
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
				vdo_h={data.media?.reddit_video?.height}
				vdo_w={data.media?.reddit_video?.width}
				vdo_src={data.media?.reddit_video?.fallback_url}
				img_src={data.preview?.images[0].resolutions[3]?.url}
				thumbnail={data?.thumbnail}
			/>
		{/each}
	{/if}
</section>
