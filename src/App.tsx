import Layout from "./Layout";
import ConfigsProvider from "src/contexts/ConfigsProvider";
import ThemeProvider from "src/contexts/ThemeProvider";

export default (): JSX.Element => {
  return (
    <ThemeProvider>
      <ConfigsProvider>
        <Layout />
      </ConfigsProvider>
    </ThemeProvider>
  );
};
