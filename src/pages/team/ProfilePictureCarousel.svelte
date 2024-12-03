<script>
	import { onMount, onDestroy } from "svelte";

	import ProfileCard from "@components/cards/Profile.svelte";

	export let profileList;

	let carousel;
	let currentIndex = 0;

	function updateCarousel() {
		const width = carousel.clientWidth;
		carousel.style.transform = `translateX(-${currentIndex * width}px)`;
	}

	function prevSlide() {
		currentIndex = currentIndex > 0 ? currentIndex - 1 : profileList.length - 1;
		updateCarousel();
	}

	function nextSlide() {
		currentIndex = currentIndex < profileList.length - 1 ? currentIndex + 1 : 0;
		updateCarousel();
	}

	onMount(() => {
		updateCarousel();
	});

	onDestroy(() => {
		// Cleanup if necessary
	});
</script>

<div class="w-full h-40 overflow-x-hidden text-white">
	<div class="flex transition-transform duration-500" bind:this={carousel}>
		{#each profileList as profile}
			<ProfileCard {...profile} />
		{/each}
	</div>
	<button class="absolute left-0" on:click={prevSlide}>Prev</button>
	<button class="absolute right-0" on:click={nextSlide}>Next</button>
</div>
