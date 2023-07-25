<script>
import Projects from '$lib/components/Projects.svelte';
import { projects } from '$lib/data/data';
</script>

<svelte:head>
  <title>Razaq Himawan | Projects</title>
</svelte:head>

<h2 class="text-3xl font-semibold mb-2">My Projects</h2>

<div class="h-[450px] overflow-y-scroll border border-accent p-4 rounded-md">
  {#each projects as project (project.id)}
    <Projects {project} />
  {/each}
</div>
