import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
  async function getPosts(page = 1) {
    const res = await fetch(`/api/posts`);
    const posts: Post[] = await res.json();

    const totalPosts = posts.length;
    const maxItemsPerPage = 6;
    const pageSize = Math.min(maxItemsPerPage, totalPosts);

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    // Slice the array to get the posts for the current page
    const postsOnPage = posts.slice(startIndex, endIndex);

    if (postsOnPage.length < 1) {
      throw error(404, `Could not find any post`);
    }
    return {
      postsOnPage,
      totalPosts,
      pageSize,
    };
  }

  return {
    posts: await getPosts(Number(params.page)),
  };
}
