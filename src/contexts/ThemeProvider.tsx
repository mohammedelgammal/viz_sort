import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import ThemeContext from "./themeContext";
import { ProviderProps } from "src/types/Context";

export default ({ children }: ProviderProps): JSX.Element => {
  const [isDark, setDark] = useState<boolean>(false);
  const algorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;
  const token = {
    colorBgBase: isDark ? "#222831" : "#F6F6F6",
    colorPrimary: isDark ? "#B2B377" : "#393E46",
    colorText: isDark ? "#EEEEEE" : "#393E46",
  };
  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      <ConfigProvider theme={{ algorithm, token }}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
