<script>
	import FlowCarousel from "@components/FlowCarousel.svelte";
	import BracketedContent from "@components/BracketedContent.svelte";
	import SpotlightCarousel from "@components/SpotlightCarousel.svelte";

	export let testimonialList = [
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
			animationDelay: "[animation-delay:-8s]",
		},
		{
			quote:
				'Receive tailored solutions that meet your goals. Finally, select from our diverse range of gamified solutions to enhance and elevate your employee training program."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-[25deg]",
			animationDelay: "[animation-delay:-16s]",
		},
		{
			quote: 'This is a test."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-[45deg]",
			animationDelay: "[animation-delay:-24s]",
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
			class="text-primary-beige/70 max-w-[26rem] 2xl:max-w-[32rem] 3xl:max-w-[38rem] font-[84] text-base 2xl:text-xl 3xl:text-2xl text-right">
			Our clients’ stories reflect our commitment to excellence and results. See
			how we’ve helped them achieve success.
		</p>
	</div>
	<div
		class="flex justify-center space-x-24 mt-8 h-full overflow-x-auto p-5 relative">
		<SpotlightCarousel list={testimonialList} />
	</div>
	<div class="flex flex-col align-middle justify-center mt-16">
		<h4 class="text-primary-beige/60 text-base font-light text-center">
			Working with ecosystem leaders
		</h4>
		<FlowCarousel
			list={[
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
				{ name: "adigital-logo", link: "https://example.com/adigital-logo" },
			]} />
	</div>
</div>
