<script lang="ts">
import BlogCard from '$lib/components/BlogCard.svelte';
import Pagination from '$lib/components/Pagination.svelte';
import { page } from '$app/stores';

export let data;

$: totalItems = data.posts.totalPosts;
$: totalPages = Math.ceil(totalItems / data.posts.pageSize);
$: currentPage = Number($page.params.page);
</script>

<svelte:head>
  <title>Razaq Himawan | Blog</title>
</svelte:head>
<h2 class="text-3xl font-semibold">Latest</h2>

<section class="h-full flex flex-grow flex-col my-8">
  {#each data.posts.postsOnPage as post (post.slug)}
    <BlogCard
      page={1}
      {post}
    />
  {/each}
</section>

<Pagination
  {currentPage}
  {totalPages}
/>

<style>
section {
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
</style>
