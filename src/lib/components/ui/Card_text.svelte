<script lang="ts">
	import { page } from '$app/stores'

	export let title: string, selftext: string, post_hint: string, url: string, domain: string

	$: truncate = (text: string | undefined, noOfChar = 180) => {
		if (text === null || text!.length === 0) return
		if (text!.length < noOfChar) return text
		const index = text!.substring(0, noOfChar - 1)
		return index.substring(0, index.lastIndexOf(' ')) + ' ... read more.'
	}
</script>

<div class="space-y-4">
	{#if post_hint === 'link'}
		<a href={url} target="_blank" class="btn btn-xs btn-info normal-case rounded-full"
			>{domain}&nbsp;&rightarrow;
		</a>
	{/if}
	{#if title}
		<h4 class="text-primary font-semibold">{title}</h4>
	{/if}
	{#if selftext}
		<div>
			{#if $page.url.pathname.includes('/post')}
				{@html selftext}
			{:else}
				{@html truncate(selftext)}
			{/if}
		</div>
	{/if}
</div>
