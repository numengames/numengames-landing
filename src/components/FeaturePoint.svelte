<script>
	export let title;
	export let isAnimating;
	export let superscriptNumber;
</script>

<button
	class={`flex items-center gap-1.5 mt-8 2xl:mt-10 text-left cursor-pointer ${isAnimating ? "opacity-100" : "opacity-30"}`}
	type="button"
	on:click>
	<sup class="text-xl 2xl:text-2xl font-medium font-IBMPlexMono">
		{superscriptNumber}
	</sup>
	<h3 class="text-3xl 2xl:text-4xl 3xl:text-5xl font-light ml-6">
		{title}
	</h3>
</button>
