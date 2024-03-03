import { useState } from "react";
import { Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import ConfigForm from "./ConfigForm/ConfigForm";
import Style from "./Sider.module.css";

export default (): JSX.Element => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Sider
      collapsible
      reverseArrow
      width={350}
      theme="light"
      onCollapse={() => setCollapsed(!isCollapsed)}
    >
      <Typography.Title level={4} className={Style.title}>
        {isCollapsed ? <SettingOutlined /> : "Configurations"}
      </Typography.Title>
      {!isCollapsed && <ConfigForm />}
    </Sider>
  );
};
