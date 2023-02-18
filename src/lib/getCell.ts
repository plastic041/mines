import { COLS } from "./constants";

export function getCell(index: number): [number, number] {
  return [index % COLS, Math.floor(index / COLS)];
}
