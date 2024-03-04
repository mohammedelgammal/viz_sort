import { SortingVisualizer } from "src/common";
import useBubbleSort from "src/hooks/useBubbleSort";

export default (): JSX.Element => {
  const [graph, selected, isFinished] = useBubbleSort();

  return (
    <SortingVisualizer
      algorithm="Bubble Sort"
      graph={graph}
      selected={selected}
      isFinished={isFinished}
    />
  );
};
