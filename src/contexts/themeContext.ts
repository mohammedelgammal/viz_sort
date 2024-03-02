import React, { createContext } from "react";

interface ThemeContextType {
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default createContext<ThemeContextType>({} as ThemeContextType);
