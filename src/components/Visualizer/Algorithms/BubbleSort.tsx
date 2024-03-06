import { useMemo } from "react";
import { SortingVisualizer } from "src/common";
import useBubbleSort from "src/hooks/useBubbleSort";

export default (): JSX.Element => {
  const { list, selected, isSorting, isSorted } = useBubbleSort();

  return useMemo(() => {
    return (
      <SortingVisualizer
        algorithm="Bubble Sort"
        list={list}
        selected={selected}
        isSorting={isSorting}
        isSorted={isSorted}
      />
    );
  }, [list, selected, isSorting, isSorted]);
};
