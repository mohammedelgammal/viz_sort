import { memo } from "react";
import { Flex, Spin, Typography } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { SortingVisualizerProps } from "src/types/Sorting";
import getBarsBg from "src/helpers/getBarsBg";
import Style from "./SortingVisualizer.module.css";

export default memo(
  ({
    algorithm,
    description,
    list,
    isSorting,
    isSorted,
    selected,
    timeComplexity,
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
      <Flex className={Style.infoStack}>
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
      <Typography.Text>{description}</Typography.Text>
      <Typography.Text>
        Time Comlpexity: <strong className={Style.tc}>{timeComplexity}</strong>
      </Typography.Text>
    </Flex>
  )
);
