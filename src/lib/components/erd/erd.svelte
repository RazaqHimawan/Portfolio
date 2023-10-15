<script lang="ts">
import mermaid from 'mermaid';
import { onMount } from 'svelte';

let erd: HTMLPreElement;

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
});

onMount(() => {
  mermaid.run({ nodes: [erd] });
});
</script>

<pre
  class="mermaid"
  bind:this={erd}>
    <slot />
</pre>
