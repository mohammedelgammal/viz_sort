import { useContext } from "react";
import { SortingVisualizer } from "src/common";
import configsContext from "src/contexts/configsContext";
import useBubbleSort from "src/hooks/useBubbleSort";

export default (): JSX.Element => {
  const {
    state: { list, selected, isSorted },
  } = useContext(configsContext);

  useBubbleSort();

  return (
    <SortingVisualizer
      algorithm="Bubble Sort"
      list={list}
      selected={selected}
      isSorted={isSorted}
    />
  );
};
