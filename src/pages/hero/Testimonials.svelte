<script>
	import BracketedContent from "@components/BracketedContent.svelte";

	export let testimonials = [
		{
			quote:
				'Receive tailored solutions that meet your goals. Finally, select from our diverse range of gamified solutions to enhance and elevate your employee training program."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-180",
			animationDelay: "",
		},
		{
			quote:
				'My favorite part of this training is the immersive learning ability for students is really incredible and the instructor was great!"',
			author: "Manuel Castro",
			position: "Program Specialist at Hayward Unified School District Office",
			hueRotate: "hue-rotate-90",
			animationDelay: "[animation-delay:-4s]",
		},
		{
			quote:
				'Receive tailored solutions that meet your goals. Finally, select from our diverse range of gamified solutions to enhance and elevate your employee training program."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-[25deg]",
			animationDelay: "[animation-delay:-8s]",
		},
		{
			quote: 'This is a test."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-[45deg]",
			animationDelay: "[animation-delay:-12s]",
		},
	];
</script>

<div class="w-full min-h-[675px]">
	<BracketedContent text="TESTIMONIALS" />
	<div class="flex justify-between items-start mt-4">
		<h3
			class="text-primary-beige text-4xl 2xl:text-5xl 3xl:text-6xl font-medium">
			Why People Love Us
		</h3>
		<p
			class="text-primary-beige/70 max-w-[29rem] 2xl:max-w-[31rem] 3xl:max-w-[36rem] font-[84] text-lg 2xl:text-xl 3xl:text-2xl">
			Our clients’ stories reflect our commitment to excellence and results. See
			how we’ve helped them achieve success.
		</p>
	</div>
	<div
		class="flex justify-center space-x-24 mt-8 h-full overflow-x-auto p-5 relative">
		<div
			class="carousel h-[400px] w-full flex justify-center relative"
			style="perspective: 1200px; perspective-origin: center;">
			{#each testimonials as testimonial, index}
				<div
					class="card absolute flex flex-col bg-white text-primary-panther rounded-lg p-6 w-[30vw] max-w-[459px] h-[400px] shadow-lg animate-[carousel_16s_infinite_ease-in-out] {testimonial.hueRotate} {testimonial.animationDelay}"
					style="transform-style: preserve-3d; backface-visibility: hidden; transition: transform 1s ease, opacity 1s ease; ">
					<blockquote
						class="relative text-lg font-light mb-4 h-full flex flex-col justify-center">
						<p class="text-4xl font-bold text-primary-coralRed leading-none">
							“
						</p>
						<div class="flex-grow text-2xl">{testimonial.quote}</div>
					</blockquote>
					<p class="text-primary-panther text-xl">{testimonial.author}</p>
					{#if testimonial.position}
						<p class="text-base opacity-75 text-primary-panther">
							{testimonial.position}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
