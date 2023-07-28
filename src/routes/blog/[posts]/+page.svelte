<script lang="ts">
import { formatDate } from '$lib/utils';

export let data;

const { meta, content } = data.post;
</script>

<svelte:head>
  <title>Razaq Himawan | {meta.title}</title>
  <meta
    property="og:type"
    content="article"
  />
  <meta
    property="og:title"
    content={meta.title}
  />
</svelte:head>

<article class="lg:w-[600px]">
  <hgroup class="text-center">
    <h1 class="text-5xl font-semibold uppercase">{meta.title}</h1>
    <p>Published at {formatDate(meta.date)}</p>
  </hgroup>

  <div class="mt-1 mb-4">
    {#each meta.categories as category}
      <span class="text-dark-text bg-dark-secondary mr-2 px-2 py-1 rounded-md"
        >&num;{category}</span
      >
    {/each}
  </div>

  <div class="prose">
    <svelte:component this={content} />
  </div>
</article>

<style>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>
