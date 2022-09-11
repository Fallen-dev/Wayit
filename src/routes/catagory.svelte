<script lang="ts">
	import { fly } from 'svelte/transition'
	import PlaceholderCatagoryCard from '$lib/layouts/placeholder/PlaceholderCatagoryCard.svelte'
	import URL from '$lib/url'
	import utils from '$lib/utils'
	import { browser } from '$app/env'

	interface Data {
		advertiser_category: string
		banner_background_color: string
		banner_img: string
		community_icon: string
		community_reviewed: string
		created: string
		description: string
		description_html: string
		display_name: string
		header_img: string
		header_title: string
		icon_img: string
		key_color: string
		over18: string
		public_description: string
		public_description_html: string
		subscribers: string
		title: string
		url: string
	}
	let catagoriesPopular: Data[] = []
	let catagoriesNew: Data[] = []
	let loaded = false
	let introAnimated = false
	$: selected = 'popular'

	async function load() {
		introAnimated = true
		// if (localStorage.getItem('catagoriesPopular')) {
		// 	loaded = true
		// 	return catagoriesPopular.push(...JSON.parse(localStorage.getItem('catagoriesPopular') || ''))
		// }
		const res = await fetch(URL + `subreddits.json?raw_json=1`)
		const data = await res.json()

		const res1 = await fetch(URL + `subreddits/new.json?raw_json=1`)
		const data1 = await res1.json()

		data.data.children.map((data: { data: any }) =>
			catagoriesPopular.push({
				advertiser_category: data.data.advertiser_category,
				banner_background_color: data.data.banner_background_color,
				banner_img: data.data.banner_img,
				community_icon: data.data.community_icon,
				community_reviewed: data.data.community_reviewed,
				created: data.data.created,
				description: data.data.description,
				description_html: data.data.description_html,
				display_name: data.data.display_name,
				header_img: data.data.header_img,
				header_title: data.data.header_title,
				icon_img: data.data.icon_img,
				key_color: data.data.key_color,
				over18: data.data.over18,
				public_description: data.data.public_description,
				public_description_html: data.data.public_description_html,
				subscribers: data.data.subscribers,
				title: data.data.title,
				url: data.data.url
			})
		)
		data1.data.children.map((data: { data: any }) =>
			catagoriesNew.push({
				advertiser_category: data.data.advertiser_category,
				banner_background_color: data.data.banner_background_color,
				banner_img: data.data.banner_img,
				community_icon: data.data.community_icon,
				community_reviewed: data.data.community_reviewed,
				created: data.data.created,
				description: data.data.description,
				description_html: data.data.description_html,
				display_name: data.data.display_name,
				header_img: data.data.header_img,
				header_title: data.data.header_title,
				icon_img: data.data.icon_img,
				key_color: data.data.key_color,
				over18: data.data.over18,
				public_description: data.data.public_description,
				public_description_html: data.data.public_description_html,
				subscribers: data.data.subscribers,
				title: data.data.title,
				url: data.data.url
			})
		)
		loaded = true
	}
	setTimeout(() => {
		if (!introAnimated) browser && load()
	}, 1000)
	const noOfPlaceholders = Array(3)
</script>

<!-- <div class="p-6 mx-auto w-min">
	<div class="bg-base-100 p-2 rounded-full &flexbox justify-center gap-2">
		<button
			on:click={() => load()}
			class="{selected === 'popular'
				? 'btn-primary'
				: 'btn-ghost'} btn px-6 normal-case rounded-full">Popular</button
		>
		<button
			on:click={() => load()}
			class="{selected === 'new' ? 'btn-primary' : 'btn-ghost'} btn px-6 normal-case rounded-full"
			>Newest</button
		>
	</div>
</div> -->
<h1 class="text-4xl font-light px-4 py-6">Popular all the time</h1>
<section in:fly={{ y: 200, duration: 450 }} on:introend={() => load()} class="px-2 pb-24 space-y-4">
	{#if !loaded}
		{#each noOfPlaceholders as _}
			<PlaceholderCatagoryCard />
		{/each}
	{:else}
		{#each catagoriesPopular as catagory}
			<a
				href={'r/' + catagory.display_name}
				class="block relative rounded-2xl bg-base-100 isolate overflow-hidden"
			>
				<div class="p-4 space-y-4">
					<div class="w-min gap-4 &flexbox">
						{#if catagory.icon_img}
							<div class="w-12 h-12 rounded-full bg-neutral overflow-hidden">
								<img class="block w-full h-full object-cover" src={catagory.icon_img} alt="" />
							</div>
						{/if}
						<div class="flex flex-col">
							<p class="flex-wrap font-bold truncate text-accent">
								{catagory.display_name}
							</p>
							<p class="w-max text-sm">
								{utils.numberFormat(catagory.subscribers).format()} subscribers
							</p>
						</div>
					</div>
					{#if catagory.over18 === 'true'}
						<div class="badge badge-warning badge-outline">nsfw</div>
					{/if}
					<h4 class="text-lg font-bold text-primary">
						{catagory.title ? catagory.title : catagory.header_title}
					</h4>
					{#if catagory.public_description_html}
						<div>{@html catagory.public_description_html}</div>
					{/if}
				</div>
				{#if catagory.banner_img}
					<div class="absolute inset-0 bg-black opacity-20 -z-[1]">
						<img
							class="block w-full h-full object-cover rounded-2xl"
							src={catagory.banner_img}
							alt=""
						/>
					</div>
				{/if}
			</a>
		{/each}
		<h1 class="text-4xl font-light px-4 py-6">Newest subreddits this week</h1>
		{#each catagoriesNew as catagory}
			<a
				href={'r/' + catagory.display_name}
				class="block relative rounded-2xl bg-base-100 isolate overflow-hidden"
			>
				<div class="p-4 space-y-4">
					<div class="w-min gap-4 &flexbox">
						{#if catagory.icon_img}
							<div class="w-12 h-12 rounded-full bg-neutral overflow-hidden">
								<img class="block w-full h-full object-cover" src={catagory.icon_img} alt="" />
							</div>
						{/if}
						<div class="flex flex-col">
							<p class="flex-wrap font-bold truncate text-accent">
								{catagory.display_name}
							</p>
							<p class="w-max text-sm">
								{utils.numberFormat(catagory.subscribers).format()} subscribers
							</p>
						</div>
					</div>
					{#if catagory.over18 === 'true'}
						<div class="badge badge-warning badge-outline">nsfw</div>
					{/if}
					<h4 class="text-lg font-bold text-primary">
						{catagory.title ? catagory.title : catagory.header_title}
					</h4>
					{#if catagory.public_description_html}
						<div>{@html catagory.public_description_html}</div>
					{/if}
				</div>
				{#if catagory.banner_img}
					<div class="absolute inset-0 bg-black opacity-20 -z-[1]">
						<img
							class="block w-full h-full object-cover rounded-2xl"
							src={catagory.banner_img}
							alt=""
						/>
					</div>
				{/if}
			</a>
		{/each}
	{/if}
</section>
