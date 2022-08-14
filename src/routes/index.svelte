<script lang="ts">
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'

	browser && localStorage.getItem('username') && goto('/home')

	let value: string
</script>

<div class="flex flex-col justify-between h-screen px-6 py-12">
	<div class="space-y-8">
		<h1 class="text-4xl font-bold leading-[1.25]">Dive into anything with Wayit</h1>
		<p class="leading-[1.65]">
			Wayit is another yet modern gorgeous looking reddit client for the web. So you don&apos; t
			have to surf the subreddits on the Reddit&apos;s bloated website.
		</p>
	</div>
	<div class="space-y-8">
		<div>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text font-semibold">Add your username to start now!</span>
			</label>
			<input
				class="w-full input input-primary input-bordered"
				type="text"
				name="uname"
				placeholder="Username"
				bind:value
			/>
		</div>
		<a
			class="btn btn-block btn-primary {!value && 'btn-disabled'}"
			href="/home"
			on:click={() => localStorage.setItem('username', value)}
			>Get started
		</a>
	</div>
</div>
