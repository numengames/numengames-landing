<script>
	import { onMount, onDestroy } from "svelte";

	import { setupRotation } from "@scripts/rotation.js";
	import LoadingButton from "@components/LoadingButton.svelte";
	import BracketedContent from "@components/BracketedContent.svelte";
	import PulseAnimatedBtn from "@components/PulseAnimatedBtn.svelte";
	import CardWithTextOverlay from "@components/cards/WithTextOverlay.svelte";

	export let textObj;

	let activeIndex = 0;
	const contentCount = 3;
	let timeUntilNextAnimation = 20000;

	const { start, stop, handleButtonClick } = setupRotation(
		contentCount,
		timeUntilNextAnimation,
		(newIndex) => (activeIndex = newIndex),
	);

	onMount(() => start());

	onDestroy(() => stop());
</script>

<div
	class="w-full flex flex-col items-center relative mt-16 after:content-[''] after:absolute after:w-full after:left-[-2.5rem] after:h-[90%] after:top-1/2 after:transform after:-translate-y-1/2">
	<div
		class="bg-[url('/icons/khepri.svg')] bg-repeat bg-[length:15%] absolute w-[calc(100%+4.5rem)] h-[90%] left-[-2.5rem] opacity-25">
	</div>
	<div class="flex flex-col justify-center items-center z-10 mb-14 max-w-[75%]">
		<BracketedContent
			className="text-primary-beige/75"
			text={textObj?.bracketedContent} />
		<h1
			class="text-5xl leading-tight 2xl:text-5xl 2xl:leading-tight font-normal text-left mt-3 mb-6 text-primary-beige pr-10">
			{textObj?.header?.titlePart1}
			<span class="text-primary-coralRed">{textObj?.header?.titlePart2}</span>
			{textObj?.header?.titlePart3}
		</h1>
		<h2
			class="w-[75%] text-base font-light text-primary-beige/75 text-center mb-6">
			{textObj?.header?.subtitle}
		</h2>
		<div class="flex text-primary-beige font-light gap-6">
			<PulseAnimatedBtn text={textObj?.ctaButtons?.primary?.text} />
			<button
				class="text-xs px-6 py-3 bg-basics-white/10 border-basics-white/20 rounded border hover:bg-basics-white/30">
				{textObj?.ctaButtons?.secondary?.text}
			</button>
		</div>
	</div>
</div>
