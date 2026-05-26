<script lang="ts">
	const { children } = $props();
</script>

<div class="px-6 py-16 md:px-8 md:py-24">
	<div class="mx-auto max-w-4xl">
		<article class="md-content">
			{@render children()}
		</article>
	</div>
</div>
