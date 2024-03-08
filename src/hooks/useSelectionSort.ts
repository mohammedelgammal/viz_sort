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
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (isSorting && !isSorted)
          timers.push(
            setTimeout(() => {
              dispatch({ type: actions.SET_SELECTED, payload: [i, j] });
              dispatch({ type: actions.SET_IS_SORTING, payload: true });
              if (list[i] > list[j])
                dispatch({
                  type: actions.SET_LIST,
                  payload: swap(i, j, list),
                });
              if (i === list.length - 2) {
                dispatch({ type: actions.SET_IS_SORTING, payload: false });
                dispatch({ type: actions.SET_IS_SORTED, payload: true });
              }
            }, speed * i * list.length + j * speed)
          );
      }
    }
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isSorting, isSorted]);
  return { list, selected, isSorting, isSorted };
};
