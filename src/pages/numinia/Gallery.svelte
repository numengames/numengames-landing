<script>
	import BracketedContent from "@components/BracketedContent.svelte";

	export let textObj;

	let currentIndex = 0;
	const images = [
		"/assets/6529.png",
		"/assets/active-inference-institute.png",
		"/assets/6529.png",
		"/assets/6529.png",
	];

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div class="w-full flex flex-col relative">
	<div class="w-full flex flex-col items-start z-10">
		<BracketedContent
			className="text-primary-beige/75"
			text={textObj?.bracketedContent} />
		<div class="w-full flex flex-col justify-between items-center">
			<h2
				class="text-4xl 2xl:text-5xl font-normal mt-3 mb-6 text-primary-beige pr-10">
				{textObj?.header?.titlePart1}
				<span class="text-primary-coralRed">{textObj?.header?.titlePart2}</span>
				{textObj?.header?.titlePart3}
			</h2>
			<p class="text-primary-beige">{textObj?.description}</p>
		</div>
	</div>
	<div class="flex flex-col items-center w-full">
		<img src={images[currentIndex]} alt="Gallery Image" class="w-40 mb-4" />
		<div class="flex justify-center w-full">
			<button
				on:click={prevImage}
				class="bg-primary-coralRed text-white p-2 rounded-full mx-2">
				&lt;
			</button>
			<button
				on:click={nextImage}
				class="bg-primary-coralRed text-white p-2 rounded-full mx-2">
				&gt;
			</button>
		</div>
	</div>
</div>
