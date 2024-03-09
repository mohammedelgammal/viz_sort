import { useMemo } from "react";
import { SortingVisualizer } from "src/common";
import useInsertionSoert from "src/hooks/useInsertionSort";

export default (): JSX.Element => {
  const { list, selected, isSorting, isSorted } = useInsertionSoert();

  return useMemo(() => {
    return (
      <SortingVisualizer
        algorithm="Insertion Sort"
        description="Insertion sort is a simple sorting algorithm that works similarly to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed in the correct position in the sorted part."
        timeComplexity="O(n^2)"
        list={list}
        selected={selected}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    );
  }, [list, selected, isSorting, isSorted]);
};
