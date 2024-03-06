import { useReducer } from "react";
import ConfigsContext from "./configsContext";
import configReducer from "src/reducers/configReducer";
import createRandomList from "src/helpers/createRandomList";
import { DEFAULT_LENGHT, DEFAULT_SPEED, GRAPH_HEIGHT } from "src/constants";
import { ProviderProps, StateType } from "src/types/Context";

export default ({ children }: ProviderProps): JSX.Element => {
  const initialState: StateType = {
    list: createRandomList(DEFAULT_LENGHT, GRAPH_HEIGHT),
    selected: [-1, -1],
    isSorted: false,
    isSorting: false,
    speed: DEFAULT_SPEED,
  };

  const [state, dispatch] = useReducer(configReducer, initialState);

  return (
    <ConfigsContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigsContext.Provider>
  );
};
