<script lang="ts">
	import PCard from '$lib/layouts/placeholder/P_Card.svelte'
	import URL from '$lib/url'
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import Card from '$lib/layouts/Card.svelte'
	import { NumberFormat, UNIXTSReadable } from '$lib/utils'
	import { browser } from '$app/env'
	import PlaceholderUser from '$lib/layouts/placeholder/PlaceholderUser.svelte'

	let postdata: {
		data: any
		body_html: string
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
	let userInfo: {
		id: string
		verified: string
		awardee_karma: string
		is_mod: string
		awarder_karma: string
		icon_img: string
		link_karma: string
		total_karma: string
		name: string
		created: string
		comment_karma: string
	}[] = []

	let loaded = false
	let postLoaded = false
	let introAnimated = false

	async function load() {
		const res = await fetch(URL + `user/${$page.params.uname}/about.json?raw_json=1`)
		const data = await res.json()
		loaded = true
		introAnimated = true
		userInfo.push(data.data)
	}
	async function loadPost() {
		const res = await fetch(URL + `user/${$page.params.uname}/.json?raw_json=1`)
		const data = await res.json()
		postLoaded = true
		data.data.children.forEach((post: any) => {
			postdata.push(post.data)
		})
	}
	const data = userInfo[0]
	setTimeout(() => {
		if (!introAnimated) browser && load()
		if (!introAnimated) browser && loadPost()
	}, 1000)
</script>

<section in:fly={{ y: 200, duration: 450 }} on:introend={load}>
	{#if !loaded}
		<PlaceholderUser />
	{:else}
		{#each userInfo as data}
			<div class="bg-base-100 p-6">
				<div class="&flexbox gap-6 justify-start">
					<div class="avatar">
						<div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={data.icon_img} alt="" />
						</div>
					</div>
					<div class="space-y-2">
						<div class="flex items-center gap-1">
							{#if data.verified}
								<svg
									class="w-5 h-5 flex-shrink-0 text-warning"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.39 5.20979L16.8 8.02979C16.99 8.41979 17.5 8.78979 17.93 8.86979L20.48 9.28979C22.11 9.55979 22.49 10.7398 21.32 11.9198L19.33 13.9098C19 14.2398 18.81 14.8898 18.92 15.3598L19.49 17.8198C19.94 19.7598 18.9 20.5198 17.19 19.4998L14.8 18.0798C14.37 17.8198 13.65 17.8198 13.22 18.0798L10.83 19.4998C9.12 20.5098 8.08 19.7598 8.53 17.8198L9.1 15.3598C9.19 14.8798 9 14.2298 8.67 13.8998L6.68 11.9098C5.51 10.7398 5.89 9.55979 7.52 9.27979L10.07 8.85979C10.5 8.78979 11.01 8.40979 11.2 8.01979L12.61 5.19979C13.38 3.67979 14.62 3.67979 15.39 5.20979Z"
										fill="currentColor"
									/>
									<path
										d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"
										fill="currentColor"
									/>
									<path
										d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"
										fill="currentColor"
									/>
									<path
										d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"
										fill="currentColor"
									/>
								</svg>
							{/if}
							<h4 class="font-bold text-lg">{data.name}</h4>
						</div>
						<p class="text-sm text-primary/60">
							Redditor from {UNIXTSReadable(data.created, true)}
						</p>
					</div>
				</div>
				<!-- karma -->
				<div class="divider pt-4">Karma</div>
				<div class="stats flex">
					<div class="stat place-items-center">
						<div class="stat-title">Awardee</div>
						<div class="stat-value text-xl">{NumberFormat(data.awardee_karma)}</div>
					</div>

					<div class="stat place-items-center">
						<div class="stat-title">Total</div>
						<div class="stat-value text-xl text-secondary">{NumberFormat(data.total_karma)}</div>
					</div>

					<div class="stat place-items-center">
						<div class="stat-title">Comment</div>
						<div class="stat-value text-xl">{NumberFormat(data.comment_karma)}</div>
					</div>
				</div>
			</div>
		{/each}
	{/if}
</section>
<div class="divider px-6" />
<section
	in:fly={{ y: 200, duration: 450, delay: 500 }}
	on:introend={loadPost}
	class="px-2 pb-24 space-y-4"
>
	{#if !postLoaded}
		<PCard />
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
				selftext={data.body_html}
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
		<div class="pt-6">
			<h4 class="text-4xl font-light">
				You&apos;re at the end&comma;&nbsp;
				<button on:click={() => window.scrollTo(0, 0)} class="link link-secondary">Go to top</button
				>
			</h4>
		</div>
	{/if}
</section>
