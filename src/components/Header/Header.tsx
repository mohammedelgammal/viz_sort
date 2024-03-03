import { useContext } from "react";
import { Flex, Switch, Typography } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import themeContext from "src/contexts/themeContext";
import Style from "./Header.module.css";

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
