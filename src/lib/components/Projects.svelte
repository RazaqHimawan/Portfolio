<script lang="ts">
import type { Project } from '$lib/types';

export let project: Project;
</script>

<div class="flex flex-col my-4 p-4 border border-accent rounded-md">
  <h3 class="text-2xl font-semibold">{project.title}</h3>
  <p class="mt-2 mb-4">{project.description}</p>
  <div class="flex gap-4">
    <a
      class="rounded-md px-4 py-3 bg-dark-secondary text-dark-text transition-all duration-500 hover:bg-primary hover:text-text"
      href={project.githubLink}
      >Github
    </a>
    <a
      class="rounded-md px-4 py-3 bg-dark-secondary text-dark-text transition-all duration-500 hover:bg-primary hover:text-text"
      href={project.websiteLink}
      >Visit
    </a>
  </div>
</div>
