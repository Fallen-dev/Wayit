<script lang="ts">
	import CardUserinfo from '$lib/components/ui/Card_userinfo.svelte'
	import CardBadge from '$lib/components/ui/Card_badge.svelte'
	import CardText from '$lib/components/ui/Card_text.svelte'
	import CardMediaview from '$lib/components/ui/Card_mediaview.svelte'
	import CardActionsbtn from '$lib/components/ui/Card_actionsbtn.svelte'

	import { mediaSrc } from '$lib/store/mediaSrc'

	export let uname: string,
		subreddit: string,
		date: string,
		id: string,
		title: string,
		selftext: string,
		ups: string,
		num_comments: string,
		post_hint: string,
		url: string,
		domain: string,
		author_premium: string,
		is_video: string,
		over_18: string,
		total_awards_received: string,
		vdo_h: string,
		vdo_w: string,
		vdo_src: string,
		img_src: string,
		thumbnail: string

	mediaSrc.set(img_src)
</script>

<a
	href={'/post/' + id}
	class="block bg-base-100 {$$restProps.overrideClass
		? $$restProps.class
		: 'p-4 rounded-2xl space-y-4 border border-neutral/5'}"
>
	<CardUserinfo {id} {uname} {author_premium} {subreddit} {date} />
	<CardBadge {post_hint} {is_video} {over_18} {total_awards_received} />
	<CardText {title} {selftext} {post_hint} {url} {domain} />
	{#if is_video === 'true' || (img_src && img_src.substring(0, 8) === 'https://')}
		<CardMediaview {is_video} {vdo_h} {vdo_w} {vdo_src} {img_src} {thumbnail} />
	{/if}
	<CardActionsbtn {ups} {num_comments} />
</a>
