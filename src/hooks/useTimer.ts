import { useContext, useEffect, useState } from "react";
import configsContext from "src/contexts/configsContext";

export default () => {
  const {
    state: { isSorting, isSorted },
  } = useContext(configsContext);

  const [timer, setTimer] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout = setInterval(() => {}, 0);
    if (isSorting && !isSorted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setDuration(timer);
      setTimer(0);
    }

    return () => clearInterval(interval);
  }, [isSorting]);

  return isSorting && !isSorted ? timer : duration;
};
