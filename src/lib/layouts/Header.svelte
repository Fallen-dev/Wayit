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
		prevURL = n?.from?.pathname || ''
	})

	$: checkRoute = () => {
		let value = 0
		if (
			!$page.url.pathname.includes('home') &&
			!$page.url.pathname.includes('catagory') &&
			!$page.url.pathname.includes('search') &&
			!$page.url.pathname.includes('saved') &&
			!$page.url.pathname.includes('me')
		)
			return (value = 1)
		return value
	}
	let y = 0
</script>

<svelte:window bind:scrollY={y} />
{#if checkRoute()}
	<header
		class="w-full sticky bg-base-{y > 0 ? '300' : '100'} transition-colors top-0 px-4 py-5 z-50"
	>
		<div class="w-min gap-4 &flexbox">
			{#if checkRoute()}
				<a href={prevURL || '/home'} class="btn btn-sm btn-circle">
					<svg
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
				</a>
			{/if}
			<h4 class="text-xl font-semibold capitalize">
				{checkRoute() ? prevURL.substring(1) : ''}
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
{/if}
