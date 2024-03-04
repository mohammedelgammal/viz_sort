import { useState } from "react";
import ConfigsContext from "./configsContext";
import createRandomList from "src/helpers/createRandomList";
import { ProviderProps } from "src/types/Context";

export default ({ children }: ProviderProps): JSX.Element => {
  const [list, setList] = useState<number[]>(createRandomList(100, 500));
  const [selected, setSelected] = useState<[number, number]>([0, 1]);
  const [isFinished, setFinished] = useState<boolean>(false);

  return (
    <ConfigsContext.Provider
      value={{ list, setList, selected, setSelected, isFinished, setFinished }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};
