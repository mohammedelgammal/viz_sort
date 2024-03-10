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

    const heapify = async (array: number[], length: number, i: number) => {
      let largest = i,
        l = 2 * i + 1,
        r = 2 * i + 2;

      if (l < length && array[l] > array[largest]) largest = l;
      if (r < length && array[r] > array[largest]) largest = r;

      if (largest !== i) {
        swap(i, largest, array);
        await heapify(array, length, largest);
        await new Promise((resolve) => {
          if (isSorting && !isSorted) timers.push(setTimeout(resolve, speed));
        });
        dispatch({
          type: actions.SET_SELECTED,
          payload: [i, largest],
        });
        dispatch({
          type: actions.SET_LIST,
          payload: [...array],
        });
      }
    };
    const heapSort = async (array: number[]) => {
      var length = array.length;
      for (var i = Math.floor(length / 2) - 1; i >= 0; i--)
        await heapify(array, length, i);

      for (var i = length - 1; i > 0; i--) {
        swap(0, i, array);
        await heapify(array, i, 0);

        await new Promise((resolve) => {
          if (isSorting && !isSorted) timers.push(setTimeout(resolve, speed));
        });
        dispatch({
          type: actions.SET_SELECTED,
          payload: [0, i],
        });
        dispatch({
          type: actions.SET_LIST,
          payload: array,
        });
      }
      dispatch({ type: actions.SET_FINISHED, payload: true });
    };
    heapSort(list);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isSorting, isSorted, speed, dispatch]);

  return { list, selected, isSorting, isSorted };
};
