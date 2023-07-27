<script lang="ts">
import type { Project } from '$lib/types';

export let project: Project;
</script>

<div class="flex flex-col my-8 p-4 border border-accent rounded-md">
  <h3 class="text-2xl font-semibold">{project.title}</h3>
  <p class="mt-2 mb-4">{project.description}</p>
  <div class="flex gap-4">
    <a
      class="bg-primary px-4 py-3 rounded-md transition-all duration-500 dark:bg-dark-secondary hover:bg-dark-secondary hover:text-dark-text hover:dark:bg-dark-primary
      hover:dark:text-text"
      href={project.githubLink}
      >Github
    </a>
    <a
      class="bg-primary px-4 py-3 rounded-md transition-all duration-500 dark:bg-dark-secondary hover:bg-dark-secondary hover:text-dark-text hover:dark:bg-dark-primary
      hover:dark:text-text"
      href={project.websiteLink}
      >Visit
    </a>
  </div>
</div>
