<script lang="ts">
	export let is_video: string,
		img_src: string,
		vdo_src: string,
		vdo_w: string,
		vdo_h: string,
		thumbnail: string
</script>

<div class="-mx-4 bg-neutral-focus overflow-hidden">
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
		<img class="block w-full h-full object-cover" src={img_src} alt={img_src} />
	{/if}
</div>
