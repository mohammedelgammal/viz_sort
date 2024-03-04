export interface ThemeContextType {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ConfigsContextType {
  list: number[];
  setList: React.Dispatch<React.SetStateAction<number[]>>;
  selected: [number, number];
  setSelected: React.Dispatch<React.SetStateAction<[number, number]>>;
  isFinished: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProviderProps {
  children: React.ReactNode;
}
