import { useEffect, useState } from "react";
import createRandomList from "src/helpers/createRandomList";
import { UseSortProps, SortingData } from "src/types/Sorting";

export default ({ maxHeight, length, doSort }: UseSortProps): SortingData => {
  const [list, setList] = useState<number[]>(
    createRandomList(length, maxHeight)
  );
  const [selected, setSelected] = useState<[number, number]>([0, 1]);
  const [isFinished, setFinished] = useState<boolean>(false);

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
