import { AnyAction } from "redux"; // Import AnyAction from the redux package

enum ActionType {
  SET_SHOW_MENU = "SET_SHOW_MENU",
  UNSET_SHOW_MENU = "UNSET_SHOW_MENU",
}

interface SetShowMenuAction {
  type: ActionType.SET_SHOW_MENU;
  payload: {
    showMenu: boolean;
  };
}

interface UnsetShowMenuAction {
  type: ActionType.UNSET_SHOW_MENU;
  payload: {
    showMenu: boolean;
  };
}

export type Action = SetShowMenuAction | UnsetShowMenuAction | AnyAction;

function setShowMenuActionCreator(): SetShowMenuAction {
  return {
    type: ActionType.SET_SHOW_MENU,
    payload: {
      showMenu: true,
    },
  };
}

function unsetShowMenuActionCreator(): UnsetShowMenuAction {
  return {
    type: ActionType.UNSET_SHOW_MENU,
    payload: {
      showMenu: false,
    },
  };
}

export { ActionType, setShowMenuActionCreator, unsetShowMenuActionCreator };
