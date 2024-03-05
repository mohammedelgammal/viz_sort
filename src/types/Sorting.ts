export type SortingAlgorithm = () => NodeJS.Timeout;

export interface SortingVisualizerProps {
  algorithm: string;
  list: number[];
  selected: [number, number];
  isSorting: boolean;
  isSorted: boolean;
}
