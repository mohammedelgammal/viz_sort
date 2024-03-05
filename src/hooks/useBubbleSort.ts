import { useContext, useEffect } from "react";
import configsContext from "src/contexts/configsContext";
import swap from "src/helpers/swap";
import { actions } from "src/types/Context";

export default () => {
  const {
    state: { list },
    dispatch,
  } = useContext(configsContext);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length - i - 1; j++) {
        timers.push(
          setTimeout(() => {
            dispatch({ type: actions.SET_SELECTED, payload: [j, j + 1] });
            if (list[j] > list[j + 1])
              dispatch({
                type: actions.SET_LIST,
                payload: swap(j, j + 1, list),
              });
            if (i === list.length - 2)
              dispatch({ type: actions.SET_IS_SORTED, payload: true });
          }, 10 * i * list.length + j * 10)
        );
      }
    }
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);
};
