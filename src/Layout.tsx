import { Layout } from "antd";
import { Header, Footer } from "components/index";

const { Sider, Content } = Layout;

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
};

export default (): JSX.Element => {
  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Header />
        <Content>Content</Content>
        <Footer />
      </Layout>
      <Sider collapsible>Sider</Sider>
    </Layout>
  );
};
