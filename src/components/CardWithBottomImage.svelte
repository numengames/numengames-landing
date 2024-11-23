<script>
	export let image;
	export let description;
	export let isAnimating;
</script>

<section
	class={`${(isAnimating && "flex") || "hidden"} font-geist aspect-[5/4] relative w-full pt-10 pl-10 pr-10 pb-0 bg-primary-panther/10 flex-col justify-between rounded-xl shadow-lg shadow-[#00000088] overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-[30%] after:w-[150%] after:h-[200%] after:bg-[radial-gradient(circle_at_bottom,rgba(243,80,89,0.9),rgba(21,7,8,0.001),transparent)] after:rounded-full after:pointer-events-none`}>
	<p class="text-xl 2xl:text-2xl font-extralight text-primary-beige/75">
		{description}
	</p>
	<img
		src={image}
		alt="card_img"
		class="w-full drop-shadow-[0_10px_10px_rgba(243,80,89,0.5)]" />
</section>
