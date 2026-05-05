<script lang="ts">
	import '$lib/muistipelistyles/tulosmodal.css';
	let {
		open,
		onClose,
		onRestart,
		onMenu,
		onNextLevel,
		Score = $bindable(),
		Quesses = $bindable()
	} = $props();

	function Close() {
		if (onClose != null) {
			open = false;
			onClose();
		}
	}

	function Restart() {
		if (onRestart != null) {
			onRestart();
		}
	}

	function Menu() {
		if (onMenu != null) {
			onMenu();
		}
	}

	function NextLevel() {
		if (onNextLevel != null) {
			onNextLevel();
		}
	}

	function GetScoreMessage(scorePrecentage: number): string {
		if (scorePrecentage == 100) {
			return 'Perfect';
		}
		if (scorePrecentage >= 67) {
			return 'Almost there';
		}
		if (scorePrecentage >= 34) {
			return 'Good';
		}
		if (scorePrecentage >= 1) {
			return 'Not bad';
		}

		return 'Try again';
	}
</script>

{#if open}
	<button class="backdrop" aria-label="Close modal" onclick={Close}> </button>
	<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
	<div class="modal">
		<div class="content">
			<div class="pointympyra">
				<div class="pointit jersey-10-regular">{Score}/{Quesses}</div>
			</div>
			<div class="motivaatioteksti jersey-10-regular">
				{GetScoreMessage((Score / Quesses) * 100)}
			</div>
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
