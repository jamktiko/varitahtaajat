<script>
	import '$lib/muistipelistyles/tulosmodal.css';
	let { open, onClose } = $props();

	function Close() {
		open = false;
		if (onClose != null) {
			onClose();
		}
	}

	function Restart() {}

	function Menu() {}

	function NextLevel() {}
</script>

{#if open}
	<button class="backdrop" aria-label="Close modal" onclick={Close}> </button>
	<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
	<div class="modal">
		<div class="content">
			<div class="pointympyra">
				<div class="pointit jersey-10-regular">6/10</div>
			</div>
			<div class="motivaatioteksti jersey-10-regular">Not bad. Try it again!</div>
			<button class="nappulanextlevel" onclick={NextLevel}>
				<div class="nappulanextleveltx jersey-10-regular">Next Level</div>
			</button>
			<button class="nappularestart" onclick={Restart}>
				<div class="nappularestarttx jersey-10-regular">Restart</div>
			</button>
			<button class="nappulamenu" onclick={Menu}>
				<div class="nappulamenutx jersey-10-regular">Menu</div>
			</button>
		</div>
	</div>
{/if}

<style>
</style>
