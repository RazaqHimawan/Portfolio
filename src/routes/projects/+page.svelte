<script>
import Projects from '$lib/components/Projects.svelte';
import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>Razaq Himawan | Projects</title>
</svelte:head>

<h2 class="text-3xl font-semibold mb-8">My Projects</h2>

<section>
  {#each projects as project (project.id)}
    <Projects {project} />
  {/each}
</section>

<style>
section {
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
</style>
