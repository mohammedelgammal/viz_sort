import { useContext, useEffect } from "react";
import configsContext from "src/contexts/configsContext";
import { UseSortProps, SortingData } from "src/types/Sorting";

export default ({ doSort }: UseSortProps): SortingData => {
  const { list, setList, selected, setSelected, isFinished, setFinished } =
    useContext(configsContext);

  useEffect(() => {
    const timer: NodeJS.Timeout = doSort({
      list,
      setList,
      setSelected,
      setFinished,
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return [list, selected, isFinished];
};
