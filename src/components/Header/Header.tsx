import { Flex } from "antd";
import { useContext } from "react";
import themeContext from "src/contexts/themeContext";

export default (): JSX.Element => {
  const headerStyle: React.CSSProperties = {
    justifyContent: "space-between",
    backgroundColor: "#4096ff",
    padding: 50,
  };

  const { setDark } = useContext(themeContext);

  return (
    <Flex style={headerStyle}>
      <div onClick={() => setDark(true)}></div>
    </Flex>
  );
};
