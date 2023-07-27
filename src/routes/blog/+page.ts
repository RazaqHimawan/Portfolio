import type { Post } from '$lib/types';

export function load({ fetch }) {
  async function getPosts() {
    const res = await fetch('/api/posts');
    const posts: Post[] = await res.json();
    return posts;
  }

  return {
    posts: getPosts(),
  };
}
