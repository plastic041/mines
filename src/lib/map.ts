import type { CellState } from "../stores/map";
import { COLS, ROWS } from "./constants";
import { getNeighbors } from "./getNeighbors";

/// make map
export function makeMap(mineCount: number): CellState[][] {
  const map: CellState[][] = new Array(ROWS);
  for (let i = 0; i < ROWS; i++) {
    map[i] = [...new Array(COLS)].map(() => ({
      field: "empty",
      neighborMines: 0,
      revealed: false,
    }));
  }

  for (let i = 0; i < mineCount; i++) {
    const x = Math.floor(Math.random() * COLS);
    const y = Math.floor(Math.random() * ROWS);
    console.log(x, y);
    if (map[y][x].field === "mine") {
      i--;
    } else {
      map[y][x].field = "mine";
    }
  }

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (map[y][x].field === "mine") {
        continue;
      }

      let count = 0;
      for (const [newX, newY] of getNeighbors(x, y)) {
        if (map[newY][newX].field === "mine") {
          count++;
        }
      }

      if (count > 0) {
        map[y][x].neighborMines = count;
      }
    }
  }

  return map;
}
