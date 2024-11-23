<script>
	import { onMount } from "svelte";
	import BracketedContent from "@components/BracketedContent.svelte";

	export let steps = [
		{
			number: "01",
			title: "Act",
			description:
				"Provide your requirements and employee persona to help us design a solution perfectly suited to your team's needs.",
		},
		{
			number: "02",
			title: "Infer",
			description:
				"We thoroughly assess your needs. Our specialists will evaluate and develop tailored simulation solutions designed to align perfectly with your employees' skill sets.",
		},
		{
			number: "03",
			title: "Serv",
			description:
				"Receive tailored solutions that meet your goals. Finally, select from our diverse range of gamified solutions to enhance and elevate your employee training program.",
		},
	];

	onMount(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(".work-process-step");
			elements.forEach((element, index) => {
				const rect = element.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom >= 0) {
					element.classList.add("visible");
					element.style.opacity = 1;
				} else {
					element.classList.remove("visible");
					element.style.opacity = 0;
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<div class="flex flex-col max-w-[580px] 3xl:max-w-[720px]">
	<div
		class="h-[600px] sticky top-[100px] flex flex-col items-center z-20 text-primary-beige">
		<BracketedContent text="SERVICES" />
		<h2 class="text-5xl 3xl:text-6xl font-medium text-center mt-3">
			How We Collaborate
		</h2>
	</div>

	{#each steps as step, index}
		<div
			class="work-process-step sticky opacity-0 transition-opacity duration-700 p-6 bg-gradient-to-tr from-[#2C2C2C] via-[#3B2C36] to-[#1F2C2C] rounded-lg shadow-lg mx-12"
			style={`top: ${280 + index * 120}px; z-index: ${3 + index}; transform: rotate(${index % 2 === 0 ? "-3deg" : "3deg"}); margin-bottom: ${[144, 0, -144][index] || 0}px;`}>
			<p
				class="px-5 mt-2 text-2xl font-light text-primary-coralRed font-IBMPlexMono">
				{step.number}
			</p>
			<div class="p-6 mt-2">
				<h3 class="text-primary-beige text-4xl font-medium text-left mb-3">
					{step.title}
				</h3>
				<p class="text-primary-beige/70 font-thin mt-6 text-base 3xl:text-2xl">
					{step.description}
				</p>
				{#if index === steps.length - 1}
					<div class="relative inline-block">
						<button
							class="text-base px-6 py-3 rounded-md border border-solid border-[#F350594D] backdrop-blur-[25px] shadow-[0_0_20px_0_#F35059] mt-10 text-primary-beige">
							Digital Team Readiness Assessment
						</button>
						<span
							class="absolute top-10 right-0 text-xs font-bold text-white bg-red-500 rounded-md px-2 py-1 transform translate-x-1/2 -translate-y-1/2">
							FREE
						</span>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
