<script>
	export let name;
	export let imgPath;
</script>

<div
	class="relative h-48 w-full bg-cover"
	style="background-image: url({imgPath});">
	<div class="absolute bottom-2">
		<h4>{name}</h4>
	</div>
</div>
