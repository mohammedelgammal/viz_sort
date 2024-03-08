import { useContext, useMemo } from "react";
import { Button, Flex, Select, Slider, Tooltip, Typography } from "antd";
import { BorderOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import Timer from "./components/Timer";
import configsContext from "src/contexts/configsContext";
import createRandomList from "src/helpers/createRandomList";
import algoOptions from "./data";
import { DEFAULT_LENGHT, DEFAULT_SPEED, GRAPH_HEIGHT } from "src/constants";
import { actions } from "src/types/Context";
import Style from "./ConfigForm.module.css";

export default (): JSX.Element => {
  const {
    state: { list, algorithm, isSorting, isSorted },
    dispatch,
  } = useContext(configsContext);

  return useMemo(() => {
    return (
      <form className={Style.form}>
        <Flex className={Style.inputStack}>
          <Select
            onChange={(value) => {
              dispatch({ type: actions.SET_ALGORITHM, payload: value });
              dispatch({ type: actions.SET_IS_SORTED, payload: false });
              dispatch({ type: actions.SET_IS_SORTING, payload: false });
            }}
            variant="outlined"
            style={{ width: "100%" }}
            options={algoOptions}
            defaultValue={algorithm}
            disabled={isSorting}
          />
          <Timer />
          <Flex className={Style.submit}>
            {!isSorting ? (
              <Button
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => {
                  dispatch({ type: actions.SET_IS_SORTING, payload: true });
                }}
                disabled={isSorted}
              >
                Visualize
              </Button>
            ) : (
              <Button
                type="primary"
                icon={<BorderOutlined />}
                onClick={() => {
                  dispatch({ type: actions.SET_IS_SORTING, payload: false });
                }}
              >
                Stop
              </Button>
            )}
            <Tooltip title="Shuffle">
              <Button
                type="link"
                onClick={() => {
                  dispatch({
                    type: actions.SET_LIST,
                    payload: createRandomList(list.length, GRAPH_HEIGHT),
                  });
                  dispatch({ type: actions.SET_IS_SORTED, payload: false });
                  dispatch({ type: actions.SET_IS_SORTING, payload: false });
                }}
                className={Style.randomBtn}
                icon={<ReloadOutlined style={{ fontSize: "20px" }} />}
                disabled={isSorting}
              />
            </Tooltip>
          </Flex>
          <Flex>
            <Slider
              className={Style.slider}
              tooltip={{ formatter: (value?: number) => `${value} ms` }}
              onChange={(value) => {
                dispatch({ type: actions.SET_SPEED, payload: value });
                dispatch({ type: actions.SET_IS_SORTED, payload: false });
                dispatch({ type: actions.SET_IS_SORTING, payload: false });
              }}
              min={5}
              max={100}
              step={5}
              disabled={isSorting}
              defaultValue={DEFAULT_SPEED}
            />
            <Typography.Text className={Style.label}>Speed</Typography.Text>
          </Flex>
          <Flex>
            <Slider
              className={Style.slider}
              onChange={(value) => {
                dispatch({
                  type: actions.SET_LIST,
                  payload: createRandomList(value, GRAPH_HEIGHT),
                });
                dispatch({ type: actions.SET_IS_SORTED, payload: false });
                dispatch({ type: actions.SET_IS_SORTING, payload: false });
              }}
              min={5}
              max={400}
              step={15}
              disabled={isSorting}
              defaultValue={DEFAULT_LENGHT}
            />
            <Typography.Text className={Style.label}>Length</Typography.Text>
          </Flex>
        </Flex>
      </form>
    );
  }, [isSorting, isSorted, list.length]);
};
