import { useContext, useEffect } from "react";
import configsContext from "src/contexts/configsContext";
import swap from "src/helpers/swap";
import { SortingData } from "src/types/Sorting";

export default (): SortingData => {
  const { list, setList, selected, setSelected, isFinished, setFinished } =
    useContext(configsContext);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    for (let i = 0; i < list.length; i++) {
      for (let j = 1; j < list.length - i - 1; j++) {
        timer = setTimeout(() => {
          setSelected([j, j + 1]);
          if (list[j] > list[j + 1]) setList(swap(j, j + 1, list));
          if (i === list.length - 2) setFinished(true);
        }, 10 * i * list.length + j * 10);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return [list, selected, isFinished];
};
