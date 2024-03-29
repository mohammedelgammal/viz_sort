import { useContext } from "react";
import { Flex, Image, Switch, Typography } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import themeContext from "src/contexts/themeContext";
import logo from "src/assets/vizsort_logo.png";
import Style from "./Header.module.css";

export default (): JSX.Element => {
  const { setDark } = useContext(themeContext);

  return (
    <Flex className={Style.header}>
      <Typography.Text className={Style.logo}>
        <Image
          preview={false}
          height={40}
          width={40}
          src={logo}
          alt="viz_sort_logo"
        />
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
