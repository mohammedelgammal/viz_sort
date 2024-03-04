import { Flex, Spin, Typography } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { SortingVisualizerProps } from "src/types/Sorting";
import getBarsBg from "src/helpers/getBarsBg";
import Style from "./SortingVisualizer.module.css";

export default ({
  algorithm,
  graph,
  isFinished,
  selected,
}: SortingVisualizerProps) => (
  <Flex className={Style.visualizer}>
    <Flex className={Style.bars}>
      {graph.map((value, index) => (
        <div
          children
          key={index}
          className={Style.bar}
          style={{
            height: `${value}px`,
            width: `${100 / graph.length}%`,
            backgroundColor: getBarsBg(isFinished, index, selected),
          }}
        />
      ))}
    </Flex>
    <Flex className={Style.info}>
      <Typography.Text className={Style.title}>{algorithm}</Typography.Text>
      {isFinished ? (
        <Flex>
          <CheckCircleFilled />
          <span>Sorted</span>
        </Flex>
      ) : (
        <Spin />
      )}
    </Flex>
  </Flex>
);
