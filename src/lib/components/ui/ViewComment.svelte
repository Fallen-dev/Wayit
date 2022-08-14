<script lang="ts">
	import moment from 'moment'
	import { marked } from 'marked'
	export let author: string, created: string, comment: string

	function parseMD(str: string) {
		if (str === undefined || str === null) str = 'No comment data'
		return marked.parse(str)
	}
	console.log(comment)

	$: parsedMD = parseMD(comment)
</script>

<div class="space-y-6">
	<div class="bg-secondary/5 p-6 rounded-lg">
		<div class="space-y-3">
			<div class="gap-3 &flexbox">
				<p class="font-bold text-accent">u/{author}</p>
				<p class="text-sm text-neutral">
					{moment.unix(+created).format('dddd, MMM D')}
				</p>
			</div>
			<div contenteditable="false" bind:innerHTML={parsedMD} />
		</div>
	</div>
</div>
