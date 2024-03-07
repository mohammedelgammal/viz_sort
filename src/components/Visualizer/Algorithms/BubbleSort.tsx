import { useMemo } from "react";
import { SortingVisualizer } from "src/common";
import useBubbleSort from "src/hooks/useBubbleSort";

export default (): JSX.Element => {
  const { list, selected, isSorting, isSorted } = useBubbleSort();

  return useMemo(() => {
    return (
      <SortingVisualizer
        algorithm="Bubble Sort"
        description="Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high."
        timeComplexity="O(n^2)"
        list={list}
        selected={selected}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    );
  }, [list, selected, isSorting, isSorted]);
};
