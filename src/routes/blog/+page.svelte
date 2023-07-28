<script lang="ts">
import BlogCard from '$lib/components/BlogCard.svelte';

export let data;
</script>

<svelte:head>
  <title>Razaq Himawan | Blog</title>
</svelte:head>
<p />
<h2 class="text-3xl font-semibold">Latest</h2>

<section class="my-8">
  {#each data.posts as post (post.slug)}
    <BlogCard {post} />
  {/each}
</section>

<style>
section {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
</style>
