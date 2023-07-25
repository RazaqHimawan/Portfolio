<script lang="ts">
import { page } from '$app/stores';
import Toggle from './Toggle.svelte';

export let drawer = '-left-60';
export let isOpen = false;
export let modalClick: () => void;
export let hamburgerClick: () => void;

const line = 'w-6 h-1 rounded-xl bg-text dark:bg-dark-text';
const anchor =
  'flex px-4 py-2 shadow-sm rounded-xl border-2 border-accent text-text font-semibold text-lg hover:scale-110 hover:opacity-70 dark:border-dark-accent dark:text-dark-text';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
  on:click={modalClick}
  class="md:w-0 md:h-0 lg:w-0 lg:h-0"
  class:modal={isOpen}
>
  <aside
    class="w-60 h-full py-4 px-6 bg-secondary {drawer} absolute top-0 transition-all ease-in-out duration-300 dark:bg-dark-secondary"
    on:click|stopPropagation
  >
    <button
      on:click={hamburgerClick}
      class="absolute top-2 -right-[62px] min-h-[48px] min-w-[48px] grid place-items-center"
    >
      <div class="flex flex-col gap-2">
        <div
          class={line}
          class:bg-white={isOpen}
          class:firstLine={isOpen}
        />
        <div
          class={line}
          class:bg-white={isOpen}
          class:secondLine={isOpen}
        />
      </div>
    </button>

    <div class="flex flex-col h-full">
      <Toggle />
      <ul class="flex flex-col gap-4">
        <li>
          <a
            class={anchor}
            class:scale-110={$page.route.id === '/'}
            href="/">Home</a
          >
        </li>
        <li>
          <a
            class={anchor}
            class:scale-110={$page.route.id === '/projects'}
            href="/projects">Projects</a
          >
        </li>
        <li>
          <a
            class={anchor}
            href="/">Blog</a
          >
        </li>
      </ul>

      <div class="flex flex-grow justify-center items-end">
        <a
          class="p-3 mx-2 dark:fill-dark-text"
          href="https://www.linkedin.com/in/razaq-himawan/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><circle
              cx="4.983"
              cy="5.009"
              r="2.188"
            /><path
              d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
            />
          </svg>
        </a>
        <a
          class="p-3 mx-2 dark:fill-dark-text"
          href="https://github.com/RazaqHimawan"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  </aside>
</div>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);

  transition: background-color 300ms ease-in-out;
}

.firstLine {
  transform: translateY(6px) rotate(45deg);
  transition: all 500ms ease-in-out;
}
.secondLine {
  transform: translateY(-6px) rotate(-45deg);
  transition: all 500ms ease-in-out;
}
</style>
