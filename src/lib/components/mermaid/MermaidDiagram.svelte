<script lang="ts">
import mermaid from 'mermaid';
import { onMount } from 'svelte';

let diagram: HTMLPreElement;

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
});

onMount(() => {
  mermaid.run({ nodes: [diagram] });
});
</script>

<pre
  class="mermaid"
  bind:this={diagram}>
    <slot />
</pre>
