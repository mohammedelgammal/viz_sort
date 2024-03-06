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
    let timer: NodeJS.Timeout;
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length - i - 1; j++) {
        timer = setTimeout(() => {
          if (isSorting && !isSorted) {
            dispatch({ type: actions.SET_SELECTED, payload: [j, j + 1] });
            dispatch({ type: actions.SET_IS_SORTING, payload: true });
            if (list[j] > list[j + 1])
              dispatch({
                type: actions.SET_LIST,
                payload: swap(j, j + 1, list),
              });
            if (i === list.length - 2) {
              dispatch({ type: actions.SET_IS_SORTING, payload: false });
              dispatch({ type: actions.SET_IS_SORTED, payload: true });
            }
          }
        }, speed * i * list.length + j * speed);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSorting, isSorted]);
  return { list, selected, isSorting, isSorted };
};
