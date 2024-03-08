import { useContext, useMemo } from "react";
import { Flex } from "antd";
import useTimer from "src/hooks/useTimer";
import themeContext from "src/contexts/themeContext";
import { ClockCircleOutlined } from "@ant-design/icons";
import Style from "./Timer.module.css";

export default (): JSX.Element => {
  const time = useTimer();
  const { isDark } = useContext(themeContext);

  return useMemo(() => {
    return (
      <Flex className={Style.timer}>
        <ClockCircleOutlined
          style={{ fontSize: "1.2rem", color: isDark ? "#EEEEEE" : "#222831" }}
        />
        <Flex
          className={Style.time}
          style={{
            color: "#b2b377",
          }}
        >
          {`${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
            time % 60
          ).padStart(2, "0")}`}
        </Flex>
      </Flex>
    );
  }, [time, isDark]);
};
