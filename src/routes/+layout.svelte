<script lang="ts">
import '../app.css';
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import Sidebar from '$lib/components/Sidebar.svelte';

let isOpen = false;
$: drawer = isOpen ? 'left-0' : '-left-60';
</script>

<div class="h-screen bg-background dark:bg-dark-background">
  <Header />

  <Sidebar
    {drawer}
    {isOpen}
    modalClick={() => (isOpen = false)}
    hamburgerClick={() => (isOpen = !isOpen)}
  />

  <main class="pt-4 px-8 text-text dark:text-dark-text flex flex-col">
    <slot />
  </main>
  <!-- <Footer /> -->
</div>
