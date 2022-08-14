<script lang="ts">
	export let uname: string, subreddit: string, date: string, id: string, author_premium: string

	// let savearr:number[] = []
	// let arr:number[] = []
	let postsaved = false

	function savepost() {
		postsaved = !postsaved
	}
</script>

<div data-id={id} class="gap-2 &flexbox">
	<div class="flex-shrink flex flex-col justify-items-stretch overflow-hidden">
		<p class="max-w-[12rem] font-bold text-accent truncate">r/{subreddit}</p>
		<div class="text-sm gap-1 &flexbox">
			<p class="max-w-[12rem] flex-shrink-0 truncate">
				{#if author_premium}
					<div class="gap-1 &flexbox">
						<svg
							class="w-4 h-4 flex-shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.39 5.20979L16.8 8.02979C16.99 8.41979 17.5 8.78979 17.93 8.86979L20.48 9.28979C22.11 9.55979 22.49 10.7398 21.32 11.9198L19.33 13.9098C19 14.2398 18.81 14.8898 18.92 15.3598L19.49 17.8198C19.94 19.7598 18.9 20.5198 17.19 19.4998L14.8 18.0798C14.37 17.8198 13.65 17.8198 13.22 18.0798L10.83 19.4998C9.12 20.5098 8.08 19.7598 8.53 17.8198L9.1 15.3598C9.19 14.8798 9 14.2298 8.67 13.8998L6.68 11.9098C5.51 10.7398 5.89 9.55979 7.52 9.27979L10.07 8.85979C10.5 8.78979 11.01 8.40979 11.2 8.01979L12.61 5.19979C13.38 3.67979 14.62 3.67979 15.39 5.20979Z"
								fill="currentColor"
							/>
							<path
								d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"
								fill="currentColor"
							/>
							<path
								d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"
								fill="currentColor"
							/>
							<path
								d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"
								fill="currentColor"
							/>
						</svg>
						<p class="truncate">u/{uname}</p>
					</div>
				{:else}
					u/{uname}
				{/if}
			</p>
			<span class="text-neutral">&nbsp;&bull;&nbsp;{date}</span>
		</div>
	</div>
	<div class="space-x-4 text-neutral-content/25 flex-wrap gap-2 &flexbox">
		<!-- SAVE POST ICON -->
		<!-- Currently not working -->
		{#if postsaved}
			<svg
				class="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				on:click={savepost}
			>
				<path
					d="M12.89 5.87988H5.11C3.4 5.87988 2 7.27988 2 8.98988V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.24 19.5199C8.66 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.96 22.4099 16 21.7999 16 20.3499V8.98988C16 7.27988 14.6 5.87988 12.89 5.87988Z"
					fill="currentColor"
				/>
				<path
					d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z"
					fill="currentColor"
				/>
			</svg>
		{:else}
			<svg
				class="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				on:click={savepost}
			>
				<path
					d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
		<svg
			class="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M15.9965 12H16.0054"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M11.9955 12H12.0045"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M7.99451 12H8.00349"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
</div>
