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
	:global(.md > code, a) {
		word-break: break-all;
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
