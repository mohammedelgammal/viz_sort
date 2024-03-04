export interface SortingProps {
  list: number[];
  setList: React.Dispatch<React.SetStateAction<number[]>>;
  setSelected: React.Dispatch<React.SetStateAction<[number, number]>>;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

type SortingAlgorithm = ({
  list,
  setList,
  setSelected,
  setFinished,
}: SortingProps) => NodeJS.Timeout;

export type UseSortProps = {
  maxHeight: number;
  length: number;
  doSort: SortingAlgorithm;
};

export type SortingData = [number[], [number, number], boolean];

export interface SortingVisualizerProps {
  algorithm: string;
  graph: number[];
  selected: [number, number];
  isFinished: boolean;
}
