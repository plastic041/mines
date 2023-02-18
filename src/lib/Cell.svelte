<script lang="ts">
  import { map, type CellState } from "../stores/map";
  import { clickCell } from "./clickCell";

  export let cell: CellState;
  export let x: number;
  export let y: number;

  function handleClick() {
    map.update((m) => {
      const newMap = clickCell(x, y, m);
      console.log(newMap);

      return newMap;
    });
  }
</script>

{#if cell.revealed}
  {#if cell.field === "mine"}
    <div class="cell">💣</div>
  {:else if cell.neighborMines === 0}
    <div class="cell" />
  {:else}
    <div class="cell">{cell.neighborMines}</div>
  {/if}
{:else}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="cell hidden" on:click={handleClick} />
{/if}

<style>
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
  }

  .cell:hover {
    filter: brightness(0.8);
  }

  .hidden {
    background-color: gray;
  }
</style>
