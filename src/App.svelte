<script lang="ts">
  import Cell from "./lib/Cell.svelte";
  import { map } from "./stores/map";
  import { onMount } from "svelte";
  import { makeMap } from "./lib/map";
  import { COLS, ROWS } from "./lib/constants";
  import { getCell } from "./lib/getCell";

  onMount(() => {
    $map = makeMap(4);
    console.log($map);
  });
</script>

<div class="cells" style="--cols: {COLS}; --rows: {ROWS}">
  {#each $map.flat() as cell, index}
    {@const [x, y] = getCell(index)}
    <Cell {cell} {x} {y} />
  {/each}
</div>
<button on:click={() => console.log($map)}>Log map</button>

<style>
  .cells {
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
    width: 400px;
    height: 400px;
    border: 1px solid black;
  }
</style>
