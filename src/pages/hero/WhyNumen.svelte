<script>
	import { onMount, onDestroy } from "svelte";

	import FeaturePoint from "@components/FeaturePoint.svelte";
	import PulseAnimatedBtn from "@components/PulseAnimatedBtn.svelte";
	import BracketedContent from "@components/BracketedContent.svelte";
	import CardWithTextOverlay from "@components/cards/WithTextOverlay.svelte";

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
			<CardWithTextOverlay
				image="/assets/Mushrooms.png"
				description="Hosting and organizing professional events often comes with hidden costs that escalate unexpectedly. Expenses like travel and venue rentals can make traditional event formats increasingly impractical for many organizations. Shifting to immersive virtual experiences not only curbs these costs but also delivers impactful, unforgettable events."
				isAnimating={activeContent === "EventCost"} />
			<CardWithTextOverlay
				image="/assets/spring-1.png"
				description="Remote teams frequently face challenges in preserving a cohesive company culture through video meetings. Establishing authentic connections and keeping team members engaged can feel daunting when interactions lack a personal touch and fluidity. Yet, with the right set of tools, remote teams can develop deeper bonds and a sense of unity through immersive, interactive environments."
				isAnimating={activeContent === "CultureFadesOverZoom"} />
			<CardWithTextOverlay
				image="/assets/icosahedron-1.png"
				description="Planning team-building events or conferences often demands extensive coordination, from aligning schedules to securing venues and organizing activities. This often pulls critical resources away from essential business operations. By transitioning to virtual formats, organizations gain the flexibility to adapt events to their needs while maintaining scalability and meaningful engagement."
				isAnimating={activeContent === "LogisticDrainsResources"} />
		</div>
		<section class="flex flex-col justify-between w-[48%] h-full">
			<div class="flex flex-col">
				<BracketedContent text="WHY_NUMEN" />
				<FeaturePoint
					on:click={() => handleTextClick("EventCost")}
					title="Event costs spiral quickly"
					isAnimating={activeContent === "EventCost"}
					superscriptNumber="01" />
				<FeaturePoint
					on:click={() => handleTextClick("CultureFadesOverZoom")}
					title="Culture fades over zoom"
					isAnimating={activeContent === "CultureFadesOverZoom"}
					superscriptNumber="02" />
				<FeaturePoint
					on:click={() => handleTextClick("LogisticDrainsResources")}
					title="Logistics drain your resources"
					isAnimating={activeContent === "LogisticDrainsResources"}
					superscriptNumber="03" />
			</div>
			<div>
				<p
					class="text-base 2xl:text-xl font-[84] max-w-[12rem] 2xl:max-w-[13rem] 3xl:max-w-[15rem]">
					Start designing your 3D environment
				</p>
				<PulseAnimatedBtn
					className="mt-4 2xl:mt-6 2xl:text-lg text-primary-beige form-toggle-button"
					text="Ready to Talk" />
			</div>
		</section>
	</div>
</div>
