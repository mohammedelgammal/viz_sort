import { useContext, useMemo } from "react";
import { Button, Flex, Select, Slider, Typography } from "antd";
import { EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import configsContext from "src/contexts/configsContext";
import algoOptions from "./data";
import { actions } from "src/types/Context";
import Style from "./ConfigForm.module.css";

export default (): JSX.Element => {
  const {
    state: { isSorting },
    dispatch,
  } = useContext(configsContext);

  return useMemo(() => {
    const speedFormatter = (value?: number) => `${value} ms`;
    const lengthFormatter = (value?: number) => `${value! * 10}`;

    return (
      <form className={Style.form}>
        <Flex className={Style.inputStack}>
          <Select
            placeholder="Sorting Algorithm"
            variant="outlined"
            style={{ width: "100%" }}
            options={algoOptions}
            defaultActiveFirstOption
            disabled={isSorting}
          />
          <Flex>
            <Slider
              className={Style.slider}
              onChange={(value) =>
                dispatch({ type: actions.SET_SPEED, payload: value })
              }
              tooltip={{ formatter: speedFormatter }}
              disabled={isSorting}
              min={5}
              max={100}
              step={5}
            />
            <Typography.Text className={Style.label}>Speed</Typography.Text>
          </Flex>
          <Flex>
            <Slider
              className={Style.slider}
              tooltip={{ formatter: lengthFormatter }}
              min={0.5}
              disabled={isSorting}
            />
            <Typography.Text className={Style.label}>Length</Typography.Text>
          </Flex>
          <Flex className={Style.submit}>
            <Button
              type="primary"
              icon={<EyeOutlined />}
              onClick={() => {
                dispatch({ type: actions.SET_IS_SORTING, payload: true });
              }}
            >
              Visualize
            </Button>
            <Button
              type="default"
              icon={<ReloadOutlined />}
              disabled={isSorting}
            />
          </Flex>
        </Flex>
      </form>
    );
  }, [isSorting]);
};
