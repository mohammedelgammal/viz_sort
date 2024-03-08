import { useMemo } from "react";
import { SortingVisualizer } from "src/common";
import useSelectionSort from "src/hooks/useSelectionSort";

export default (): JSX.Element => {
  const { list, selected, isSorting, isSorted } = useSelectionSort();

  return useMemo(() => {
    return (
      <SortingVisualizer
        algorithm="Selection Sort"
        description="Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list."
        timeComplexity="O(n^2)"
        list={list}
        selected={selected}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    );
  }, [list, selected, isSorting, isSorted]);
};
