<script lang="ts">
export let currentPage: number;
export let totalPages: number;
</script>

<div class="pagination justify-center">
  <!-- {#if currentPage > 1}
    <a
      data-sveltekit-noscroll
      href="/blog/1">First</a
    >
    <a
      data-sveltekit-noscroll
      href="/blog/{currentPage - 1}">Previous</a
    >
  {/if} -->
  {#each [2, 1] as i}
    {#if currentPage - i > 0}
      <a
        data-sveltekit-noscroll
        href="/blog/{currentPage - i}"
      >
        {currentPage - i}
      </a>
    {/if}
  {/each}
  <span class="text-emerald-300 p-3">{currentPage}</span>
  {#each [2, 1] as _, i}
    {#if currentPage + (i + 1) <= totalPages}
      <a
        data-sveltekit-noscroll
        href="/blog/{currentPage + (i + 1)}">{currentPage + (i + 1)}</a
      >
    {/if}
  {/each}
  <!-- {#if currentPage < totalPages}
    <a
      data-sveltekit-noscroll
      href="/blog/{currentPage + 1}">Next</a
    >
    <a
      data-sveltekit-noscroll
      href="/blog/{totalPages}">Last</a
    >
  {/if} -->
</div>
