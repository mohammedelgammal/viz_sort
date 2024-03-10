import { useMemo } from "react";
import { SortingVisualizer } from "src/common";
import useQuickSort from "src/hooks/useQuickSort";

export default (): JSX.Element => {
  const { list, selected, isSorting, isSorted } = useQuickSort();

  return useMemo(() => {
    return (
      <SortingVisualizer
        algorithm="Quick Sort"
        description="QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array."
        timeComplexity="O(n^2)"
        list={list}
        selected={selected}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    );
  }, [list, selected, isSorting, isSorted]);
};
