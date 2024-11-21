<script>
	export let image;
	export let description;
	export let isAnimating;
</script>

<section
	class={`${(isAnimating && "flex") || "hidden"} relative pt-10 pl-10 pr-10 pb-0 mr-20 bg-primary-panther flex flex-col justify-between w-[48%] h-auto rounded-xl shadow-lg shadow-[#00000088] overflow-hidden transition-opacity duration-1000 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-[30%] after:w-[150%] after:h-[200%] after:bg-[radial-gradient(circle_at_bottom,rgba(243,80,89,0.9),rgba(21,7,8,0.001),transparent)] after:rounded-full after:pointer-events-none ${
		activeCard === 0 ? "opacity-100" : "opacity-0 hidden"
	} sticky top-96`}>
	<div class="text-start leading-relaxed relative z-10">
		<p class="text-2xl font-extralight opacity-75">
			{description}
		</p>
	</div>
	<div class="flex justify-end mt-6 relative z-10">
		<img
			src={image}
			alt="Imagen en la parte inferior"
			class="w-full h-auto drop-shadow-[0_10px_10px_rgba(243,80,89,0.5)] absolute bottom-0" />
	</div>
</section>
