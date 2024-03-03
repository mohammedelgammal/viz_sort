import { Flex, Switch, Typography } from "antd";
import { useContext } from "react";
import themeContext from "src/contexts/themeContext";
import Style from "./Header.module.css";
import { MoonFilled, SunFilled } from "@ant-design/icons";

export default (): JSX.Element => {
  const { setDark } = useContext(themeContext);

  return (
    <Flex className={Style.header}>
      <Typography.Text className={Style.logo}>
        <span>Viz</span>Sort
      </Typography.Text>
      <Switch
        checkedChildren={<MoonFilled />}
        unCheckedChildren={<SunFilled />}
        onChange={() => setDark((isDark) => !isDark)}
      />
    </Flex>
  );
};
