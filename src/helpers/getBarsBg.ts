import { useContext } from "react";
import themeContext from "src/contexts/themeContext";

export default (
  isFinished: boolean,
  index: number,
  selected: [number, number]
): string => {
  const { isDark } = useContext(themeContext);

  return isFinished
    ? "#FFF6BD"
    : index === selected[0]
    ? "#FFD4B2"
    : index === selected[1]
    ? "#CEEDC7"
    : isDark
    ? "#393E46"
    : "#D1D1D1";
};
