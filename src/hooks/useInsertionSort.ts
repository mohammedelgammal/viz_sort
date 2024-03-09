import { useContext, useEffect } from "react";
import configsContext from "src/contexts/configsContext";
import { actions } from "src/types/Context";

export default () => {
  const {
    state: { list, speed, isSorting, isSorted, selected },
    dispatch,
  } = useContext(configsContext);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    (async function () {
      for (let i = 0; i < list.length; i++) {
        const current = list[i];
        for (let j = i - 1, k = 1; k; j--) {
          await new Promise((resolve) => {
            if (isSorting && !isSorted) {
              timers.push(
                setTimeout(() => {
                  resolve();
                  dispatch({ type: actions.SET_SELECTED, payload: [j + 1, i] });
                  dispatch({ type: actions.SET_IS_SORTING, payload: true });
                  if (j >= 0 && list[j] > current) {
                    dispatch({ type: actions.SET_LIST, payload: list });
                    k = 1;
                    list[j + 1] = list[j];
                  } else {
                    dispatch({ type: actions.SET_LIST, payload: list });
                    list[j + 1] = current;
                    k = 0;
                  }
                  if (i === list.length - 1) {
                    dispatch({ type: actions.SET_IS_SORTING, payload: false });
                    dispatch({ type: actions.SET_IS_SORTED, payload: true });
                  }
                }, speed)
              );
            }
          });
        }
      }
    })();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isSorting, isSorted]);
  return { list, selected, isSorting, isSorted };
};
