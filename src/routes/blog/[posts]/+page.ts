import { error } from '@sveltejs/kit';

export async function load({ params }) {
  async function getPost() {
    try {
      const post = await import(`../../../lib/data/posts/${params.posts}.md`);
      return {
        content: post.default,
        meta: post.metadata,
      };
    } catch (e) {
      throw error(404, `Could not find ${params.posts}`);
    }
  }
  return {
    post: getPost(),
  };
}
