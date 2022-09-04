<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation'

	import { page } from '$app/stores'

	const sortOptions = [
		{ title: 'My feed', value: '' },
		{ title: 'Recent', value: 'new' },
		{ title: 'Best', value: 'top' },
		{ title: 'Hot', value: 'hot' }
	]
	const sortWIP = true

	let prevURL = '/home'
	afterNavigate((n): void => {
		prevURL = n?.from!.pathname || ''
	})
</script>

<header class="w-full sticky top-0 bg-base-100 p-6 pb-4 space-y-4 z-50">
	<div class="w-min gap-4 &flexbox">
		{#if $page.url.pathname !== '/home'}
			<svg
				on:click={() => goto(prevURL || '/home')}
				class="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.57 5.93005L3.5 12.0001L9.57 18.0701"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M20.5 12H3.67004"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
		<h4 class="text-2xl font-semibold capitalize">
			{$page.url.pathname !== '/home' ? prevURL.substring(1) : 'home'}
		</h4>
	</div>
	{#if !sortWIP}
		{#if $page.url.pathname === '/home'}
			<div class="px-0 justify-between tabs tabs-boxed font-medium">
				{#each sortOptions as sortOption}
					<button
						on:click={() => $page.url.searchParams.set('sort', sortOption.value)}
						class="flex-shrink-0 tab">{sortOption.title}</button
					>
				{/each}
			</div>
		{/if}
	{/if}
</header>
