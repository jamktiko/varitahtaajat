<script>
	import { flyNoDissolve } from '$lib/animations/ColorBoxQuess';

	let animation = $state(false);
	$inspect(animation);
</script>

<button onclick={() => (animation = !animation)}>Test</button>
{#if animation}
	<div class="arrow" out:flyNoDissolve={{ y: '110vh', duration: 5000 }}></div>
{/if}

<style>
	.arrow {
		overflow: hidden;
		z-index: -1;
		position: absolute;
		top: -5rem;
		left: 4rem;
		width: 5rem;
		height: 5rem;
		background-color: red;
	}
</style>
