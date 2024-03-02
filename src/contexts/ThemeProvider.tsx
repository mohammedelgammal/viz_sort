import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import ThemeContext from "./themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default ({ children }: ThemeProviderProps): JSX.Element => {
  const [isDark, setDark] = useState<boolean>(false);
  const algorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <ThemeContext.Provider value={{ setDark }}>
      <ConfigProvider theme={{ algorithm }}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
