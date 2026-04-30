<script>
	let { open, onClose, children } = $props();

	function Close() {
		open = false;
		if (onClose != null) {
			onClose();
		}
	}
</script>

{#if open}
	<button class="backdrop" aria-label="Close modal" onclick={onClose}> </button>

	<div class="modal">
		{@render children?.()}
		<button onclick={() => Close()}>Close</button>
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
