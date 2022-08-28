<script lang="ts">
	import { UNIXTSReadable } from '$lib/utils'

	export let author: string, created: string, comment: string
</script>

<div class="space-y-6">
	<div class="bg-secondary/5 p-6 rounded-lg">
		<div class="space-y-3">
			<div class="gap-3 &flexbox">
				<p class="font-bold text-accent">u/{author}</p>
				<p class="text-sm text-neutral">
					{UNIXTSReadable(created)}
				</p>
			</div>
			<div>{@html comment}</div>
		</div>
	</div>
</div>
