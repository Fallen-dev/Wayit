<script lang="ts">
	export let ups: string, num_comments: string
</script>

<div class="ml-auto w-min space-x-8 &flexbox">
	<div class="&flexbox">
		<svg
			class="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.48001 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.48001 9.54997"
				stroke-width="1.5"
				stroke-miterlimit="10"
			/>
			<path
				d="M2.38 18.3499V8.5499C2.38 7.1499 2.98 6.6499 4.38 6.6499H5.38C6.78 6.6499 7.38 7.1499 7.38 8.5499V18.3499C7.38 19.7499 6.78 20.2499 5.38 20.2499H4.38C2.98 20.2499 2.38 19.7499 2.38 18.3499Z"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<span class="ml-1 leading-[0]">{ups}</span>
	</div>
	<div class="&flexbox">
		<svg
			class="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path d="M7 8H17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M7 13H13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<span class="ml-2 leading-[0]">{num_comments}</span>
	</div>
	<div>
		<svg
			class="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8.18994 20.9399C9.34994 21.5299 10.6699 21.8599 12.0599 21.8599C13.3999 21.8599 14.6599 21.5599 15.7899 21.0099"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M4.83005 19.92C6.3654 19.92 7.61005 18.6753 7.61005 17.14C7.61005 15.6046 6.3654 14.36 4.83005 14.36C3.2947 14.36 2.05005 15.6046 2.05005 17.14C2.05005 18.6753 3.2947 19.92 4.83005 19.92Z"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M19.17 19.92C20.7054 19.92 21.95 18.6753 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6753 17.6347 19.92 19.17 19.92Z"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
</div>
