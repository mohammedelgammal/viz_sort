import Layout from "./Layout";
import ThemeProvider from "./contexts/ThemeProvider";

export default (): JSX.Element => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};
