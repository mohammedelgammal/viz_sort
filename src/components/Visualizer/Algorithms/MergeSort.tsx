import { useMemo } from "react";
import { SortingVisualizer } from "src/common";
import useMergeSort from "src/hooks/useMergeSort";

export default (): JSX.Element => {
  const { list, selected, isSorting, isSorted } = useMergeSort();

  return useMemo(() => {
    return (
      <SortingVisualizer
        algorithm="Merge Sort"
        description="Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array. In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together."
        timeComplexity="O(n log(n))"
        list={list}
        selected={selected}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    );
  }, [list, selected, isSorting, isSorted]);
};
