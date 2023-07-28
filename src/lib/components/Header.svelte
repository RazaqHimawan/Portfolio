<script lang="ts">
export let hamburgerClick: () => void;
export let isOpen = false;

const line = 'w-6 h-1 rounded-xl bg-text dark:bg-dark-text';
</script>

<header class="py-2 shadow-sm shadow-accent dark:shadow-dark-accent">
  <div class="flex justify-center">
    <a
      href="/"
      class="text-3xl font-semibold min-h-[48px] grid place-items-center text-text dark:text-dark-text
      ">Razaq Himawan</a
    >
    <button
      on:click={hamburgerClick}
      class="absolute right-3 min-h-[48px] min-w-[48px] grid place-items-center md:hidden z-10"
    >
      <div class="flex flex-col gap-2">
        <div
          class="{line} transition-all duration-500 ease-in-out"
          class:bg-white={isOpen}
          class:firstLine={isOpen}
        />
        <div
          class="{line} transition-all duration-500 ease-in-out"
          class:bg-white={isOpen}
          class:secondLine={isOpen}
        />
      </div>
    </button>
  </div>
</header>

<style>
.firstLine {
  transform: translateY(6px) rotate(45deg);
}
.secondLine {
  transform: translateY(-6px) rotate(-45deg);
}
</style>
