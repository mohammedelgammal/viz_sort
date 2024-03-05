export interface ThemeContextType {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface StateType {
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
  SET_LIST = "SET_LIST",
  SET_SELECTED = "SET_SELECTED",
  SET_IS_SORTED = "SET_IS_SORTED",
  SET_IS_SORTING = "SET_IS_SORTING",
  SET_SPEED = "SET_SPEED",
}

export interface ActionType {
  type: actions;
  payload: any;
}
