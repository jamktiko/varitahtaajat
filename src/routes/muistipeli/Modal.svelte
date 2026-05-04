<script>
	let { open, onClose } = $props();

	function Close() {
		open = false;
		if (onClose != null) {
			onClose();
		}
	}
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
			<button class="nappulanextlevel">
				<div class="nappulanextleveltx jersey-10-regular">Next Level</div>
			</button>
			<button class="nappularestart">
				<div class="nappularestarttx jersey-10-regular">Restart</div>
			</button>
			<button class="nappulamenu">
				<div class="nappulamenutx jersey-10-regular">Menu</div>
			</button>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.modal {
		padding: 1rem;
		position: fixed;
		width: 500px;
		height: 500px;
		aspect-ratio: 1/1;
		border-radius: 10px;
		background: #eeeeff;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.pointympyra {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
		background: #1e1e1e;
		border-radius: 50%;
		margin-bottom: 1rem;
	}
	.pointit {
		font-size: clamp(3rem, 2vw, 4rem);
	}
	.motivaatioteksti {
		font-size: clamp(3rem, 2vw, 4rem);
		margin-bottom: 2rem;
		color: #1e1e1e;
	}
	.nappulanextlevel,
	.nappularestart,
	.nappulamenu {
		padding: 0.5rem 1rem;
		margin: 0.5rem;
		width: clamp(200px, 15vw, 250px);
		height: clamp(40px, 10vw, 50px);
		background: #1e1e1e;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	.nappulanextleveltx,
	.nappularestarttx,
	.nappulamenutx {
		color: #ffffff;
		font-size: clamp(2rem, 3vw, 3rem);
	}
	.jersey-10-regular {
		font-family: 'Jersey 10', sans-serif;
		font-weight: 500;
		font-style: normal;
	}

	@media (min-width: 768px) {
		.modal {
			left: 25vw;
			width: 50%;
		}
	}

	@media (min-width: 1024px) {
		.modal {
			left: 30vw;
			width: 40%;
		}
	}
</style>
