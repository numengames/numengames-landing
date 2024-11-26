<script>
	export let text;
	export let isAnimate = false;

	function toggleAnimationPlayState(state) {
		document.querySelectorAll(".flow-carousel-item").forEach((card) => {
			card.style.animationPlayState = state;
		});
	}

	const bracketClass = "text-primary-coralRed text-lg 2xl:text-xl";
	const textClass = "text-xs 2xl:text-base text-primary-beige";
</script>

<div
	class={`flex items-center gap-1.5 tracking-[0.1em] font-IBMPlexMono font-light ${isAnimate ? "w-full whitespace-nowrap" : ""}`}>
	<span class={bracketClass}>[</span>
	{#if isAnimate}
		<div class="overflow-x-hidden w-full">
			<span
				class={`${textClass} flow-carousel-item animate-[flowCarousel_25s_infinite_linear] flex gap-10`}
				tabindex="-1"
				role="menuitem">{text}</span>
		</div>
	{:else}
		<span class={textClass}>{text}</span>
	{/if}
	<span class={bracketClass}>]</span>
</div>
