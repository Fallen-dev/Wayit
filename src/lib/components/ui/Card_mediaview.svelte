<script lang="ts">
	export let is_video: string,
		img_src: string,
		vdo_src: string,
		vdo_w: string,
		vdo_h: string,
		thumbnail: string

	let click = false
</script>

<div
	on:click={() => (click = !click)}
	class="{click
		? 'absolute inset-0 h-screen grid place-items-center bg-black z-[10000]'
		: '-mx-4 bg-neutral-focus'} overflow-hidden"
	class:nomargin={click}
>
	<button
		class="{click ? '' : 'hidden'} absolute top-6 left-6 p-1 rounded-full pointer-events-none"
	>
		<span class="text-4xl font-light">&times;</span>
	</button>
	{#if is_video}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			controls
			muted
			class="mx-auto w-full h-full block object-cover {+vdo_w > +vdo_h
				? 'aspect-video'
				: 'aspect-auto max-h-[60vh]'}"
			poster={thumbnail}
			src={vdo_src}
		/>
	{:else}
		<div class="{click ? '' : 'max-h-[40vh]'} ">
			<img class="block w-full h-full object-cover" src={img_src} alt={img_src} />
		</div>
	{/if}
</div>

<style>
	.nomargin {
		margin: 0 !important;
	}
</style>
