export interface ThemeContextType {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum algorithms {
  BUBBLE_SORT = "BUBBLE_SORT",
  SELECTION_SORT = "SELECTION_SORT",
  INSERTION_SORT = "INSERTION_SORT",
  MERGE_SORT = "MERGE_SORT",
  QUICK_SORT = "QUICK_SORT",
  HEAP_SORT = "HEAP_SORT",
}

export interface StateType {
  algorithm: algorithms;
  list: number[];
  selected: [number, number];
  isSorted: boolean;
  isSorting: boolean;
  speed: number;
}

export interface ConfigsContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export enum actions {
  SET_ALGORITHM = "SET_ALGORITHM",
  SET_LIST = "SET_LIST",
  SET_SELECTED = "SET_SELECTED",
  SET_IS_SORTED = "SET_IS_SORTED",
  SET_IS_SORTING = "SET_IS_SORTING",
  SET_SPEED = "SET_SPEED",
  SET_FINISHED = "SET_FINISHED",
}

export interface ActionType {
  type: actions;
  payload: any;
}

export interface SortingAlgorithmProps {
  algorithm: algorithms;
}
export type SortingAlgorithms = { [algorithm: string]: JSX.Element };
