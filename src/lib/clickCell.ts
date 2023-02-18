import type { CellState } from "../stores/map";
import { getNeighbors } from "./getNeighbors";

export function clickCell(x: number, y: number, map: CellState[][]) {
  let newMap = structuredClone(map);

  const queue: [number, number][] = [[x, y]];
  const visited = new Set<string>();

  while (queue.length) {
    const [x, y] = queue.shift()!;

    if (!visited.has(`${x},${y}`)) {
      visited.add(`${x},${y}`);

      newMap[y][x].revealed = true;
      if (map[y][x].field === "empty" && map[y][x].neighborMines === 0) {
        for (const [newX, newY] of getNeighbors(x, y)) {
          queue.push([newX, newY]);
        }
      }
    }
  }

  return newMap;
}
