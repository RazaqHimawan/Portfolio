<script lang="ts">
export let title = '';
let isHovered = false;
let x: number;
let y: number;

function mouseOver(event: MouseEvent) {
  isHovered = true;
  x = event.pageX + 5;
  y = event.pageY - 30;
}
function mouseMove(event: MouseEvent) {
  x = event.pageX + 5;
  y = event.pageY - 30;
}
function mouseLeave() {
  isHovered = false;
}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseover={mouseOver}
  on:mouseleave={mouseLeave}
  on:mousemove={mouseMove}
>
  <slot />
</div>

{#if isHovered}
  <div
    style="top: {y}px; left: {x}px;"
    class="bg-dark-secondary text-dark-text dark:bg-secondary dark:text-text rounded-md p-1 absolute"
    >{title}</div
  >
{/if}
