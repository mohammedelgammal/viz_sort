import { useMemo } from "react";
import { SortingVisualizer } from "src/common";
import useHeapSort from "src/hooks/useHeapSort";

export default (): JSX.Element => {
  const { list, selected, isSorting, isSorted } = useHeapSort();

  return useMemo(() => {
    return (
      <SortingVisualizer
        algorithm="Heap Sort"
        description="Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements."
        timeComplexity="O(n log(n))"
        list={list}
        selected={selected}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    );
  }, [list, selected, isSorting, isSorted]);
};
