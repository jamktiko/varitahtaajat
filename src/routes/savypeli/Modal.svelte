<script lang="ts">
	interface Props {
		open: boolean;
		onClose: () => void;
		score: number;
		onRestart: () => void;
	}
	let { open, onClose, score, onRestart }: Props = $props();
</script>

{#if open}
	<button class="backdrop" aria-label="Close modal" onclick={onClose}> </button>

	<div class="modal">
		<div class="tulos">
			<p>Sait {score} pistettä!</p>
			<button class="uusipeli" onclick={onRestart}>Pelaa uudestaan</button>
		</div>
		<button onclick={onClose}>Close</button>
	</div>
{/if}

<style>
	.tulos {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.uusipeli {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		background-color: #3d25c8;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

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
		top: 10vh;
		left: 10vw;
		width: 80%;
		max-height: 80vh;
		background: rgb(255, 255, 255);
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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
