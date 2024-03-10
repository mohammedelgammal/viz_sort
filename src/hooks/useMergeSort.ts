import { useContext, useEffect } from "react";
import configsContext from "src/contexts/configsContext";
import { actions } from "src/types/Context";

export default () => {
  const {
    state: { list, speed, isSorting, isSorted, selected },
    dispatch,
  } = useContext(configsContext);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const merge = async (array: number[], l: number, m: number, r: number) => {
      const left = array.slice(l, m + 1);
      const right = array.slice(m + 1, r + 1);

      let i = 0,
        j = 0,
        k = l;

      while (i < left.length && j < right.length) {
        await new Promise((resolve) => {
          timers.push(setTimeout(resolve, speed));
        });
        dispatch({ type: actions.SET_SELECTED, payload: [l + i, m + 1 + j] });

        if (left[i] <= right[j]) {
          array[k] = left[i++];
        } else {
          array[k] = right[j++];
        }
        k++;
        dispatch({ type: actions.SET_LIST, payload: array });
      }

      while (i < left.length) {
        array[k++] = left[i++];
        dispatch({ type: actions.SET_LIST, payload: array });
      }
      while (j < right.length) {
        array[k++] = right[j++];
        dispatch({ type: actions.SET_LIST, payload: array });
      }
    };

    const mergeSort = async (list: number[], l: number, r: number) => {
      if (l < r && isSorting && !isSorted) {
        const m = Math.floor(l + (r - l) / 2);
        await mergeSort(list, l, m);
        await mergeSort(list, m + 1, r);
        await merge(list, l, m, r);
        if (l === 0 && r === list.length - 1)
          dispatch({ type: actions.SET_FINISHED, payload: true });
      }
    };

    mergeSort(list, 0, list.length - 1);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isSorting, isSorted, speed]);
  return { list, selected, isSorting, isSorted };
};
