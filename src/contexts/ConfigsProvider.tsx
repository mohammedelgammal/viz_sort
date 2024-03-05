import { useReducer } from "react";
import ConfigsContext from "./configsContext";
import createRandomList from "src/helpers/createRandomList";
import { DEFAULT_LENGHT, GRAPH_HEIGHT } from "src/constants";
import {
  ActionType,
  ProviderProps,
  StateType,
  actions,
} from "src/types/Context";

export default ({ children }: ProviderProps): JSX.Element => {
  const initialState: StateType = {
    list: createRandomList(DEFAULT_LENGHT, GRAPH_HEIGHT),
    selected: [0, 1],
    isSorted: false,
    isSorting: false,
  };

  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case actions.SET_LIST:
        return { ...state, list: action.payload };
      case actions.SET_SELECTED:
        return { ...state, selected: action.payload };
      case actions.SET_IS_SORTED:
        return { ...state, isSorted: action.payload };
      case actions.SET_IS_SORTING:
        return { ...state, isSorting: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConfigsContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigsContext.Provider>
  );
};
