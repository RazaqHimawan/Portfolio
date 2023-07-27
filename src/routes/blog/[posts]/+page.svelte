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

<article>
  <hgroup>
    <h1>{meta.title}</h1>
    <p>Published at {formatDate(meta.date)}</p>
  </hgroup>

  <div class="tags">
    {#each meta.categories as category}
      <span class="surface-4">&num;{category} </span>
    {/each}
  </div>

  <div class="prose">
    <svelte:component this={content} />
  </div>
</article>
