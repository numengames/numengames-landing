<script>
	import { onMount, onDestroy } from "svelte";

	import FeaturePoint from "@components/FeaturePoint.svelte";
	import BracketedContent from "@components/BracketedContent.svelte";
	import CardWithBottomImage from "@components/CardWithBottomImage.svelte";

	let timeoutId;
	let rotationInterval = 20000;
	let activeContent = "EventCost";
	let nextRotationTime = Date.now() + rotationInterval;

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

<div class="py-[6.2rem] flex justify-between text-primary-beige">
	<div class="flex justify-between items-stretch min-h-[300px]">
		<div class="flex w-[46.5%] h-full">
			<CardWithBottomImage
				image="/assets/Mushrooms.png"
				description="Planning and executing professional events often lead to unforeseen expenses that quickly add up. From travel to venue costs, traditional event formats can become unsustainable for organizations. But by exploring immersive virtual experiences, you can reduce costs and still create impactful, memorable events."
				isAnimating={activeContent === "EventCost"} />
			<CardWithBottomImage
				image="/assets/spring-1.png"
				description="Remote teams often struggle to maintain a strong company culture through video calls. Building meaningful connections and fostering engagement is challenging when communication feels impersonal and disjointed. However, with the right tools, remote teams can develop deeper bonds and a sense of unity through immersive, interactive environments."
				isAnimating={activeContent === "CultureFadesOverZoom"} />
			<CardWithBottomImage
				image="/assets/icosahedron-1.png"
				description="Managing the logistics of team-building events or conferences can take significant time and effort. Coordinating schedules, venues, and activities often pulls valuable resources away from core business functions. Virtualizing these events frees up your team, allowing for greater flexibility and scalability without sacrificing engagement."
				isAnimating={activeContent === "LogisticDrainsResources"} />
		</div>
		<section class="flex flex-col justify-between w-[48%] h-full">
			<div class="flex flex-col">
				<BracketedContent text="WHY_NUMEN" />
				<FeaturePoint
					on:click={() => handleTextClick("EventCost")}
					title="Event Costs Spiral Quickly"
					isAnimating={activeContent === "EventCost"}
					superscriptNumber="01" />
				<FeaturePoint
					on:click={() => handleTextClick("CultureFadesOverZoom")}
					title="Culture Fades Over Zoom"
					isAnimating={activeContent === "CultureFadesOverZoom"}
					superscriptNumber="02" />
				<FeaturePoint
					on:click={() => handleTextClick("LogisticDrainsResources")}
					title="Logistics Drain Your Resources"
					isAnimating={activeContent === "LogisticDrainsResources"}
					superscriptNumber="03" />
			</div>
			<div>
				<p
					class="text-base 2xl:text-xl font-[84] max-w-[12rem] 2xl:max-w-[13rem] 3xl:max-w-[15rem]">
					Start designing your 3D environment
				</p>
				<button
					class="text-base px-6 py-3 rounded-md border border-solid border-[#F350594D] backdrop-blur-[25px] shadow-[0_0_20px_0_#F35059] mt-4 form-toggle-button">
					Ready to talk?
				</button>
			</div>
		</section>
	</div>
</div>
