export type SortingAlgorithm = () => NodeJS.Timeout;

export type SortingData = [number[], [number, number], boolean];

export interface SortingVisualizerProps {
  algorithm: string;
  graph: number[];
  selected: [number, number];
  isFinished: boolean;
}
