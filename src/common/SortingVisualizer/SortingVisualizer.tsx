import { Flex, Typography } from "antd";
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
    <Typography.Title className={Style.title} level={2}>
      {algorithm}
    </Typography.Title>
  </Flex>
);
