import { memo, useMemo } from "react";
import { Alert } from "antd";
import {
  BubbleSort,
  SelectionSort,
  InsertionSort,
  QuickSort,
} from "./Algorithms";
import {
  SortingAlgorithmProps,
  SortingAlgorithms,
  algorithms,
} from "src/types/Context";

export default memo(({ algorithm }: SortingAlgorithmProps) => {
  const sortingAlgorithms = useMemo(
    (): SortingAlgorithms => ({
      [algorithms.BUBBLE_SORT]: <BubbleSort />,
      [algorithms.SELECTION_SORT]: <SelectionSort />,
      [algorithms.INSERTION_SORT]: <InsertionSort />,
      [algorithms.QUICK_SORT]: <QuickSort />,
      [algorithms.MERGE_SORT]: <>MERGE_SORT algo</>,
      [algorithms.HEAP_SORT]: <>HEAP_SORT algo</>,
    }),
    []
  );
  return (
    sortingAlgorithms[algorithm] ?? (
      <Alert
        style={{ margin: "20px" }}
        message="Invalid Algorithm!"
        description="Algorithm not found! Please select a valid sorting algorithm."
        type="error"
        showIcon
      />
    )
  );
});
