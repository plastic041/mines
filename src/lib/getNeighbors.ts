import { COLS, ROWS } from "./constants";

/**
 * Finds 8 neighbors(4 cardinal directions + 4 diagonal directions)
 */
export function getNeighbors(x: number, y: number) {
  const neighbors = [];

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else {
        const newX = x + i;
        const newY = y + j;

        if (newX >= 0 && newX < COLS && newY >= 0 && newY < ROWS) {
          neighbors.push([newX, newY]);
        }
      }
    }
  }

  return neighbors;
}
