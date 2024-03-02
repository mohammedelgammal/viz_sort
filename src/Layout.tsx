import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  paddingInline: 48,
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
};

export default (): JSX.Element => {
  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Sider style={siderStyle}>Sider</Sider>
    </Layout>
  );
};
