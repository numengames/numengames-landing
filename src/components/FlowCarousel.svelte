<script>
	export let list = [];

	function toggleAnimationPlayState(state) {
		document.querySelectorAll(".flow-carousel-item").forEach((card) => {
			card.style.animationPlayState = state;
		});
	}
</script>

<div class="w-full overflow-hidden mt-10">
	<div
		tabindex="-1"
		role="menuitem"
		class="flow-carousel-item animate-[flowCarousel_64s_infinite_linear] flex gap-10"
		on:mouseenter={() => toggleAnimationPlayState("paused")}
		on:mouseleave={() => toggleAnimationPlayState("running")}>
		{#each list.concat(list) as { name, link }, index (index)}
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img
					src={`/assets/${name}.png`}
					alt={name}
					class="object-contain mx-7 2xl:mx-9" />
			</a>
		{/each}
	</div>
</div>
