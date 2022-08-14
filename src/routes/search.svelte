<script>
	import { page } from '$app/stores'

	import URL from '$lib/url'
	import { onMount } from 'svelte'

	let value = ''

	async function load() {
		if (value.length < 1) return
		const res = await fetch(URL + 'search.json?q=' + value)
		const data = await res.json()

		console.log(data.data)
	}
</script>

<section class="p-6 pb-24 space-y-6">
	<input bind:value type="text" placeholder="Search anything" class="input input-bordered w-full" />
	<h1>{value}</h1>
</section>
