<script>
	export let iconFileName;
	export let buttonText;
	export let isAnimating = false;

	let animate = false;

	$: {
		if (isAnimating) {
			animate = false;
			setTimeout(() => {
				animate = true;
			}, 0);
		} else {
			animate = false;
		}
	}
</script>

<button
	class="button flex items-center gap-4 px-4 py-3 border border-solid rounded-md relative overflow-hidden"
	class:animate
	on:click>
	<div class="p-2 bg-white/10 rounded-full">
		<img class="h-6 w-6" loading="lazy" src={`icons/${iconFileName}`} alt="icon" />
	</div>
	<span class="text-base 2xl:text-xl font-[84] text-left text-basics-white">
		{buttonText}
	</span>
</button>

<style>
	.button::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: background 0.5s ease;
		pointer-events: none;
	}

	.button.animate::after {
		animation: loading 10s linear forwards;
		background: rgba(255, 255, 255, 0.2);
	}

	@keyframes loading {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0%);
		}
	}
</style>
