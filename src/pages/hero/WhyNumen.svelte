<script>
	import { onMount, onDestroy } from "svelte";

	import CardWithBottomImage from "@components/CardWithBottomImage.astro";
	import LoadingButton from "@components/LoadingButton.svelte";

	let timeoutId;
	let rotationInterval = 10000;
	let activeContent = "EventCost";
	let nextRotationTime = Date.now() + rotationInterval;

	const contentArray = [
		{
			description:
				"Planificar y ejecutar eventos profesionales a menudo lleva a gastos imprevistos que se acumulan rápidamente. Desde viajes hasta costos de lugar, los formatos de eventos tradicionales pueden volverse insostenibles para las organizaciones. Pero al explorar experiencias virtuales inmersivas, puedes reducir costos y aún así crear eventos impactantes y memorables.",
			image: "/src/assets/Mushrooms.png",
		},
		{
			description:
				"Los equipos remotos a menudo luchan por mantener una cultura de empresa fuerte a través de videollamadas. Construir conexiones significativas y fomentar el compromiso es un desafío cuando la comunicación se siente impersonal y desarticulada. Sin embargo, con las herramientas adecuadas, los equipos remotos pueden desarrollar vínculos más profundos y un sentido de unidad a través de entornos inmersivos e interactivos.",
			image: "/src/assets/spring.png",
		},
		{
			description:
				"Gestionar la logística de eventos de team-building o conferencias puede requerir un tiempo y esfuerzo significativos. Coordinar horarios, lugares y actividades a menudo desvía recursos valiosos de las funciones principales del negocio. Virtualizar estos eventos libera a tu equipo, permitiendo una mayor flexibilidad y escalabilidad sin sacrificar el compromiso.",
			image: "/src/assets/Cone.png",
		},
	];

	const contents = [
		"EventCost",
		"CultureFadesOverZoom",
		"LogisticDrainsResources",
	];

	function getNextContent(current, list) {
		const currentIndex = list.indexOf(current);
		const nextIndex = (currentIndex + 1) % list.length;
		return list[nextIndex];
	}

	function rotateContent() {
		activeContent = getNextContent(activeContent, contents);
		scheduleNextRotation();
	}

	function scheduleNextRotation() {
		nextRotationTime = Date.now() + rotationInterval;
		const delay = rotationInterval;
		timeoutId = setTimeout(rotateContent, delay);
	}

	function handleTextClick(content) {
		activeContent = content;
		clearTimeout(timeoutId);
		nextRotationTime = Date.now() + rotationInterval;
		scheduleNextRotation();
	}

	function handleVisibilityChange() {
		if (document.visibilityState === "visible") {
			const now = Date.now();
			const remaining = nextRotationTime - now;
			if (remaining <= 0) {
				rotateContent();
			} else {
				clearTimeout(timeoutId);
				timeoutId = setTimeout(rotateContent, remaining);
			}
		}
	}

	onMount(() => {
		scheduleNextRotation();
		document.addEventListener("visibilitychange", handleVisibilityChange);
	});

	onDestroy(() => {
		clearTimeout(timeoutId);
		document.removeEventListener("visibilitychange", handleVisibilityChange);
	});
</script>

<!-- on:click={() => handleTextClick("EventCost")}
			on:click={() => handleTextClick("CultureFadesOverZoom")}
			on:click={() => handleTextClick("LogisticDrainsResources")} -->
<div
	class="py-[6.2rem] flex flex-col items-center justify-center text-primary-beige">
	<div class="flex">
		<CardWithBottomImage
			image={contentArray[0].image}
			description={contentArray[0].description}
			isAnimating={activeContent === "EventCost"} />
		<CardWithBottomImage
			image={contentArray[1].image}
			description={contentArray[1].description}
			isAnimating={activeContent === "CultureFadesOverZoom"} />
		<CardWithBottomImage
			image={contentArray[2].image}
			description={contentArray[2].description}
			isAnimating={activeContent === "LogisticDrainsResources"} />
		<section
			class={`relative pt-10 pl-10 pr-10 pb-0 mr-20 bg-primary-panther flex flex-col justify-between w-[48%] h-auto rounded-xl shadow-lg shadow-[#00000088] overflow-hidden transition-opacity duration-1000 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-[30%] after:w-[150%] after:h-[200%] after:bg-[radial-gradient(circle_at_bottom,rgba(243,80,89,0.9),rgba(21,7,8,0.001),transparent)] after:rounded-full after:pointer-events-none ${
				activeCard === 0 ? "opacity-100" : "opacity-0 hidden"
			} sticky top-96`}>
			<div class="text-start leading-relaxed relative z-10">
				<p class="text-2xl font-extralight opacity-75">
					Planning and executing professional events often lead to unforeseen
					expenses that quickly add up. From travel to venue costs, traditional
					event formats can become unsustainable for organizations. But by
					exploring immersive virtual experiences, you can reduce costs and
					still create impactful, memorable events.
				</p>
			</div>
			<div class="flex justify-end mt-6 relative z-10">
				<img
					src="/src/assets/Mushrooms.png"
					alt="Imagen en la parte inferior"
					class="w-full h-auto drop-shadow-[0_10px_10px_rgba(243,80,89,0.5)] absolute bottom-0" />
			</div>
		</section>
		<section
			class={`relative pt-10 pl-10 pr-10 pb-0 mr-20 bg-primary-panther flex flex-col justify-between h-auto w-[48%] rounded-xl shadow-lg shadow-[#00000088] overflow-hidden transition-opacity duration-1000 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-[30%] after:w-[150%] after:h-[200%] after:bg-[radial-gradient(circle_at_bottom,rgba(243,80,89,0.9),rgba(21,7,8,0.001),transparent)] after:rounded-full after:pointer-events-none ${
				activeCard === 1 ? "opacity-100" : "opacity-0 hidden"
			} sticky top-96`}>
			<div class="text-start leading-relaxed relative z-10">
				<p class="text-2xl font-extralight opacity-75">
					Remote teams often struggle to maintain a strong company culture
					through video calls. Building meaningful connections and fostering
					engagement is challenging when communication feels impersonal and
					disjointed. However, with the right tools, remote teams can develop
					deeper bonds and a sense of unity through immersive, interactive
					environments.
				</p>
			</div>
			<div class="flex justify-end mt-6 relative z-10">
				<img
					src="/src/assets/spring.png"
					alt="Imagen en la parte inferior"
					class="w-full h-auto drop-shadow-[0_10px_10px_rgba(243,80,89,0.5)] absolute bottom-0" />
			</div>
		</section>
		<section
			class={`relative pt-10 pl-10 pr-10 pb-0 mr-20 bg-primary-panther flex flex-col justify-between h-auto w-[48%] rounded-xl shadow-lg shadow-[#00000088] overflow-hidden transition-opacity duration-1000 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-[30%] after:w-[150%] after:h-[200%] after:bg-[radial-gradient(circle_at_bottom,rgba(243,80,89,0.9),rgba(21,7,8,0.001),transparent)] after:rounded-full after:pointer-events-none ${
				activeCard === 2 ? "opacity-100" : "opacity-0 hidden"
			} sticky top-96`}>
			<div class="text-start leading-relaxed relative z-10">
				<p class="text-2xl font-extralight opacity-75">
					Managing the logistics of team-building events or conferences can take
					significant time and effort. Coordinating schedules, venues, and
					activities often pulls valuable resources away from core business
					functions. Virtualizing these events frees up your team, allowing for
					greater flexibility and scalability without sacrificing engagement.
				</p>
			</div>
			<div class="flex justify-end mt-6 relative z-10">
				<img
					src="/src/assets/Cone.png"
					alt="Imagen en la parte inferior"
					class="w-full h-auto drop-shadow-[0_10px_10px_rgba(243,80,89,0.5)] absolute bottom-0" />
			</div>
		</section>
		<section class="flex flex-col">
			<div class="flex flex-col justify-between h-full">
				<div class="flex flex-col">
					<div
						class="flex items-center gap-1.5 tracking-[0.1em] text-base font-extralight font-IBMPlexMono">
						<span class="text-primary-coralRed text-[1.2rem]">[</span>
						<span class="text-xs">WHY_NUMEN</span>
						<span class="text-primary-coralRed text-[1.2rem]">]</span>
					</div>
					<div class="flex items-center gap-1.5 tracking-[0.1em] mt-10">
						<sup
							class={`text-[1.25rem] font-medium leading-[1.5rem] tracking-[-0.03em] text-left font-IBMPlexMono ${
								activeCard === 0 ? "opacity-100" : "opacity-30"
							}`}>
							01
						</sup>
						<h3
							class={`text-[2.5rem] font-light leading-[3rem] tracking-[-0.03em] text-left ml-6 transition-opacity duration-1000 ${
								activeCard === 0 ? "opacity-100" : "opacity-30"
							}`}>
							Event Costs Spiral Quickly
						</h3>
					</div>
					<div class="flex items-center gap-1.5 tracking-[0.1em] mt-10">
						<sup
							class={`text-[1.25rem] font-medium leading-[1.5rem] tracking-[-0.03em] text-left font-IBMPlexMono ${
								activeCard === 1 ? "opacity-100" : "opacity-30"
							}`}>
							02
						</sup>
						<h3
							class={`text-[2.5rem] font-light leading-[3rem] tracking-[-0.03em] text-left ml-6 transition-opacity duration-1000 ${
								activeCard === 1 ? "opacity-100" : "opacity-30"
							}`}>
							Culture Fades Over Zoom
						</h3>
					</div>
					<div class="flex items-center gap-1.5 tracking-[0.1em] mt-10">
						<sup
							class={`text-[1.25rem] font-medium leading-[1.5rem] tracking-[-0.03em] text-left font-IBMPlexMono ${
								activeCard === 2 ? "opacity-100" : "opacity-30"
							}`}>
							03
						</sup>
						<h3
							class={`text-[2.5rem] font-light leading-[3rem] tracking-[-0.03em] text-left ml-6 transition-opacity duration-1000 ${
								activeCard === 2 ? "opacity-100" : "opacity-30"
							}`}>
							Logistics Drain Your Resources
						</h3>
					</div>
				</div>
				<div class="mt-52">
					<p
						class="text-[1.25rem] font-[84] leading-[1.875rem] text-left w-[45%]">
						Start designing your 3D environment
					</p>
					<button
						class="text-base px-6 py-3 rounded-md border border-solid border-[#F350594D] backdrop-blur-[25px] shadow-[0_0_20px_0_#F35059] mt-4">
						Ready to talk?
					</button>
				</div>
			</div>
		</section>
	</div>
</div>
