<script lang="ts">
import About from '$lib/components/About.svelte';
import Projects from '$lib/components/Projects.svelte';
import Skills from '$lib/components/Skills.svelte';

const project = {
  title: 'Portfolio Website',
  description: 'My portfolio website',
  githubLink: '/',
  websiteLink: '/',
};
</script>

<svelte:head>
  <title>Razaq Himawan | Home</title>
</svelte:head>

<section>
  <About />
</section>
<section>
  <h2 class="text-3xl font-semibold mb-4">
    My Skills
    <span class="font-mono text-accent dark:text-dark-accent">{`</>`}</span>
  </h2>
  <Skills />
</section>
