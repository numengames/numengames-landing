<script>
	export let text = "";
	export let icon = "";
	export let className = "";
</script>

<button
	class={`relative text-xs px-6 py-3 rounded-md border-[#F3505940] text-basics-white backdrop-blur-[25px] shadow-[0_0_20px_0_#F35059] btnAnimated flex items-center justify-center ${className}`}>
	{text}
	{#if icon}
		<img src={icon} alt="icon" class="ml-2 inline-block w-4 h-4" />
	{/if}
</button>

<style>
	.btnAnimated::before,
	.btnAnimated::after {
		top: 0;
		left: 0;
		border-radius: 5px;
		content: "";
		width: 100%;
		position: absolute;
		transition: 0.5s all ease;
		height: 100%;
		border: 1px solid rgba(243, 80, 88, 0.5);
		transform: scale(1);
		animation: pulse 6s infinite;
		opacity: 0.6;
	}

	.btnAnimated::before {
		animation-delay: 3s;
	}

	@keyframes pulse {
		0% {
			transform: scale3d(1.05, 1.15, 1.05);
			opacity: 0.6;
		}
		100% {
			transform: scale3d(1.3, 1.45, 1.3);
			opacity: 0;
		}
	}
</style>
