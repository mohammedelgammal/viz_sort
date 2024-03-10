import { ActionType, StateType, actions } from "src/types/Context";

export default (state: StateType, action: ActionType) => {
  switch (action.type) {
    case actions.SET_ALGORITHM:
      return { ...state, algorithm: action.payload };
    case actions.SET_LIST:
      return { ...state, list: action.payload };
    case actions.SET_SELECTED:
      return { ...state, selected: action.payload };
    case actions.SET_IS_SORTED:
      return { ...state, isSorted: action.payload };
    case actions.SET_IS_SORTING:
      return { ...state, isSorting: action.payload };
    case actions.SET_SPEED:
      return { ...state, speed: action.payload };
    case actions.SET_FINISHED:
      return { ...state, isSorted: action.payload, isSorting: !action.payload };
    case actions.RESET:
      return {
        ...state,
        isSorted: false,
        isSorting: false,
        selected: [-1, -1],
        list: action.payload,
      };
    default:
      return state;
  }
};
