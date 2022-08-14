<script lang="ts">
	import { onMount } from 'svelte'
	export let title = '',
		selftext: string,
		post_hint: string,
		url: string,
		domain: string

	let truncateText = true
	let text: any

	$: truncate = (text: string | undefined, noOfChar = 180) => {
		if (text === null || text!.length === 0) return
		if (text!.length < noOfChar || !truncateText) return text
		const index = text!.substring(0, noOfChar - 1)
		return index.substring(0, index.lastIndexOf(' ')) + ' ... read more.'
	}
	onMount(() => {
		text = truncate(selftext)
		// console.log(selftext)

		document.querySelector('.md')?.classList.add('space-y-4')
	})
</script>

<div class="space-y-4">
	{#if post_hint === 'link'}
		<a href={url} target="_blank" class="link link-accent">{domain}</a>
	{/if}
	<h4 class="text-xl text-primary font-medium">{title}</h4>
	{#if text}
		<div contenteditable="false" bind:innerHTML={text} />
	{/if}
</div>
