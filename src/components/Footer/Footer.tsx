import { Flex } from "antd";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import Style from "./Footer.module.css";

export default (): JSX.Element => {
  return (
    <Footer>
      <Flex className={Style.footer}>
        <p>© 2024 VizSort</p>
        <a
          href="https://linkedin.com/in/mohammedelgammal-codes"
          target="_blank"
        >
          <LinkedinFilled />
        </a>
        <a href="https://github.com/mohammedelgammal" target="_blank">
          <GithubFilled />
        </a>
      </Flex>
    </Footer>
  );
};
