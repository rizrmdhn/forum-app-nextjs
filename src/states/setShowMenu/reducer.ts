import { ActionType, Action as ShowMenuAction  } from "./action";

export type State = boolean;
const initialState: State = false

function setShowMenuReducer(
  state: State = initialState,
  action: ShowMenuAction,
): State {
  switch (action.type) {
    case ActionType.SET_SHOW_MENU:
      return action.payload.showMenu
    case ActionType.UNSET_SHOW_MENU:
      return action.payload.showMenu
    default:
      return state;
  }
}

export default setShowMenuReducer;
