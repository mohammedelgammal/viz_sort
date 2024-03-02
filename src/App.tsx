import { ConfigProvider } from "antd";
import Layout from "./Layout";

export default (): JSX.Element => {
  return (
    <ConfigProvider>
      <Layout />
    </ConfigProvider>
  );
};
