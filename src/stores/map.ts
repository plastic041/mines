import { writable } from "svelte/store";

export type CellState = {
  field: "mine" | "empty";
  revealed: boolean;
  neighborMines: number;
};

export const map = writable<CellState[][]>([]);
