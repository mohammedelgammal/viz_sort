import React, { createContext } from "react";

interface ThemeContextType {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default createContext<ThemeContextType>({} as ThemeContextType);
