<script>
  import Modal from '..//Modal.svelte';

  let open = $state(false);
</script>

<button onclick={() => (open = true)}>
  Avaa modal
</button>

<Modal {open} onClose={() => (open = false)}>
    <h2>Modal</h2>
    <p>Malli pelin modaleihin</p>
</Modal>
    
<style> 

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>