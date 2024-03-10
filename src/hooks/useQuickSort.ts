import { useContext, useEffect } from "react";
import configsContext from "src/contexts/configsContext";
import swap from "src/helpers/swap";
import { actions } from "src/types/Context";

export default () => {
  const {
    state: { list, speed, isSorting, isSorted, selected },
    dispatch,
  } = useContext(configsContext);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const partition = async (
      list: number[],
      low: number,
      high: number
    ): Promise<number> => {
      const pivot = list[high];
      let i = low - 1;

      for (let j = low; j <= high - 1; j++) {
        await new Promise((resolve) => {
          if (isSorting && !isSorted)
            timers.push(
              setTimeout(() => {
                dispatch({
                  type: actions.SET_SELECTED,
                  payload: [i, j],
                });
                if (list[j] < pivot) {
                  i++;
                  swap(i, j, list);
                  dispatch({
                    type: actions.SET_LIST,
                    payload: [...list],
                  });
                }
                resolve(null);
              }, speed)
            );
        });
      }

      await new Promise((resolve) => {
        timers.push(
          setTimeout(() => {
            dispatch({
              type: actions.SET_SELECTED,
              payload: [i + 1, high],
            });
            swap(i + 1, high, list);
            dispatch({
              type: actions.SET_LIST,
              payload: [...list],
            });
            resolve(null);
          }, speed)
        );
      });
      return i + 1;
    };

    const quickSort = async (
      list: number[],
      low: number,
      high: number
    ): Promise<void> => {
      if (low < high) {
        const index = await partition(list, low, high);
        await quickSort(list, low, index - 1);
        await quickSort(list, index + 1, high);
      }
    };

    const sort = async () => {
      await quickSort(list, 0, list.length - 1);
      dispatch({
        type: actions.SET_IS_SORTED,
        payload: true,
      });
      dispatch({
        type: actions.SET_IS_SORTING,
        payload: false,
      });
    };

    sort();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isSorting, isSorted, speed]);
  return { list, selected, isSorting, isSorted };
};
