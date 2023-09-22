<script lang="ts">
import type { Post } from '$lib/types';
import { formatDate } from '$lib/utils';

export let post: Post;
</script>

<div
  class="w-80 bg-primary secondary rounded-lg transition-all duration-500 dark:bg-dark-secondary hover:scale-105"
>
  <a
    href="/blog/{post.slug}"
    class="block p-4"
  >
    <h3 class="text-2xl font-bold uppercase">{post.title}</h3>
    <p class="line-clamp-4 my-2">
      {post.description}
    </p>
    <p class="text-end text-dark-secondary dark:text-dark-accent"
      >{formatDate(post.date, 'long', 'id')}</p
    >
  </a>
</div>
