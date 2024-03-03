import { Layout } from "antd";
import { Header, Footer, Visualizer, Sider } from "components/index";

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
};

export default (): JSX.Element => {
  return (
    <Layout hasSider style={layoutStyle}>
      <Layout>
        <Header />
        <Visualizer />
        <Footer />
      </Layout>
      <Sider />
    </Layout>
  );
};
