<script lang="ts">
	import Header from '$lib/layouts/Header.svelte'
	import Navbar from '$lib/layouts/Navbar.svelte'

	import '../app.css'
</script>

<div class="min-h-screen bg-base-300">
	<Header />
	<slot />
	<Navbar />
</div>

<style>
	:global(.md > p, h1, h2, h3, h4, h5, h6, pre, code, span, a) {
		white-space: inherit;
	}
	:global(.md > a[href*='https']) {
		text-decoration: underline;
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	:global(.md > * + *) {
		margin-top: 1em;
	}
</style>
