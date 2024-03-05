import { Flex, Spin, Typography } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { SortingVisualizerProps } from "src/types/Sorting";
import getBarsBg from "src/helpers/getBarsBg";
import Style from "./SortingVisualizer.module.css";

export default ({
  algorithm,
  list,
  isSorting,
  isSorted,
  selected,
}: SortingVisualizerProps) => (
  <Flex className={Style.visualizer}>
    <Flex className={Style.bars}>
      {list.map((value, index) => (
        <div
          children
          key={index}
          className={Style.bar}
          style={{
            height: `${value}px`,
            width: `${100 / list.length}%`,
            backgroundColor: getBarsBg(isSorted, index, selected),
          }}
        />
      ))}
    </Flex>
    <Flex className={Style.info}>
      <Typography.Text className={Style.title}>{algorithm}</Typography.Text>
      {isSorting && <Spin />}
      {isSorted && (
        <Flex>
          <CheckCircleFilled />
          <span>Sorted</span>
        </Flex>
      )}
    </Flex>
  </Flex>
);
