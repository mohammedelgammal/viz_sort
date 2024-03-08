import { useContext, useMemo } from "react";
import { Content } from "antd/es/layout/layout";
import SortingAlgorithm from "./SortingAlgorithm";
import configsContext from "src/contexts/configsContext";

export default (): JSX.Element => {
  const {
    state: { algorithm },
  } = useContext(configsContext);

  return useMemo(() => {
    return (
      <Content style={{ overflow: "auto" }}>
        <SortingAlgorithm algorithm={algorithm} />
      </Content>
    );
  }, [algorithm]);
};
