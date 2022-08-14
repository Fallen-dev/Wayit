<script>
	import Header from '$lib/layouts/Header.svelte'
	import Navbar from '$lib/layouts/Navbar.svelte'

	import '../app.css'
</script>

<div class="min-h-screen bg-base-300">
	<Header />
	<slot />
	<Navbar />
</div>
