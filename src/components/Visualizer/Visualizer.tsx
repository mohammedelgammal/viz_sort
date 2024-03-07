import { Content } from "antd/es/layout/layout";
import BubbleSort from "./Algorithms/BubbleSort";

export default (): JSX.Element => (
  <Content style={{ overflow: "auto" }}>
    <BubbleSort />
  </Content>
);
