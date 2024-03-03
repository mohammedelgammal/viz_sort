import { Layout } from "antd";
import { Header } from "components/index";

const { Footer, Sider, Content } = Layout;

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
        <Footer>Footer</Footer>
      </Layout>
      <Sider>Sider</Sider>
    </Layout>
  );
};
