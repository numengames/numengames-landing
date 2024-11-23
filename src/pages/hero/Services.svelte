<script>
	import { onMount, onDestroy } from "svelte";

	import CardWithVRM from "@components/CardWithVRM.svelte";
	import LoadingButton from "@components/LoadingButton.svelte";
	import BracketedContent from "@components/BracketedContent.svelte";

	let timeoutId;
	let rotationInterval = 10000;
	let activeContent = "engaging";
	let nextRotationTime = Date.now() + rotationInterval;

	const contents = ["engaging", "training", "experience-design"];

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

	function handleButtonClick(content) {
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

<div
	class="h-screen flex justify-between items-center relative before:bg-[url('/icons/khepri.svg')] before:bg-repeat before:bg-[length:15%] before:content-[''] before:absolute before:w-[calc(100%+4.5rem)] before:h-full before:left-[-2.5rem] after:content-[''] after:absolute after:w-full after:left-[-2.5rem] after:h-[90%] after:top-1/2 after:transform after:-translate-y-1/2">
	<section class="max-w-[50%] space-y-6 z-10">
		<header>
			<BracketedContent text="SERVICES" />
			<h2
				class="text-4xl leading-tight 2xl:text-5xl 2xl:leading-tight font-light text-left mt-3 text-primary-beige">
				High <span class="text-primary-coralRed">adaptability experiences</span>
				to different organizational needs
			</h2>
		</header>
		<div class="flex gap-6">
			<LoadingButton
				on:click={() => handleButtonClick("engaging")}
				iconFileName="google-cardboard-logo.svg"
				buttonText="Engaging"
				isAnimating={activeContent === "engaging"} />
			<LoadingButton
				on:click={() => handleButtonClick("training")}
				iconFileName="strategy.svg"
				buttonText="Training"
				isAnimating={activeContent === "training"} />
			<LoadingButton
				on:click={() => handleButtonClick("experience-design")}
				iconFileName="game-controller.svg"
				buttonText="Experience Design"
				isAnimating={activeContent === "experience-design"} />
		</div>
	</section>
	<aside
		class="max-w-[37%] 2xl:max-w-[40%] bg-black rounded-xl shadow-[0_0_1.25rem_0_#F3505980] z-10">
		<CardWithVRM
			title="Immersive 3D environments"
			logoFileName="zombie.svg"
			logoName="adigital"
			buttonHref="/engagement"
			viewerId="Sneaker-5-10-2024"
			categoryLabel="ENGAGING"
			highlightMetricValue="35%"
			isAnimating={activeContent === "engaging"}
			highlightMetricDescription="Engagement boost"
			description="Create immersive 3D environments that strengthen your organization's talent retention, values, and culture. Our gamified solutions ensure that processes like onboarding are both effective and engaging, helping to build a cohesive and motivated workforce." />

		<CardWithVRM
			title="Expert-led training"
			logoFileName="zombie.svg"
			logoName="adigital"
			buttonHref="/training"
			viewerId="numen-clock-25-9-2024"
			categoryLabel="TRAINING"
			highlightMetricValue="26%"
			isAnimating={activeContent === "training"}
			highlightMetricDescription="Engagement boost"
			description="Create immersive 3D environments that strengthen your organization's talent retention, values, and culture. Our gamified solutions ensure that processes like onboarding are both effective and engaging, helping to build a cohesive and motivated workforce." />

		<CardWithVRM
			title="Customized gamified experiences"
			logoFileName="zombie.svg"
			logoName="adigital"
			buttonHref="/experience"
			viewerId="wooden-chair-5-10-2024"
			categoryLabel="EXPERIENCE DESIGN"
			highlightMetricValue="26%"
			isAnimating={activeContent === "experience-design"}
			highlightMetricDescription="Engagement boost"
			description="We design fully customized gamified experiences that align with your organization's goals. Whether it's enhancing leadership development or creating a unique personal event—such as a custom proposal—our experiences deliver lasting impact and engagement." />
	</aside>
</div>
