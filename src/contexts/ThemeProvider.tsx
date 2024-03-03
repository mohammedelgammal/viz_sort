import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import ThemeContext from "./themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default ({ children }: ThemeProviderProps): JSX.Element => {
  const [isDark, setDark] = useState<boolean>(false);
  const algorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;
  const colorBgBase = isDark ? "#092635" : "#f0f2f5";

  return (
    <ThemeContext.Provider value={{ setDark }}>
      <ConfigProvider theme={{ algorithm, token: { colorBgBase } }}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
