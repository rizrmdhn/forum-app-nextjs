import { AnyAction } from "redux";

enum ActionType {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
}

interface OpenModalAction {
    type: ActionType.OPEN_MODAL;
    payload: {
        modal: boolean;
    }
}

interface CloseModalAction {
    type: ActionType.CLOSE_MODAL;
    payload: {
        modal: boolean;
    }
}

export type OpenModalActions = OpenModalAction | CloseModalAction | AnyAction;

function openModalActionCreator(): OpenModalAction {
    return {
        type: ActionType.OPEN_MODAL,
        payload: {
            modal: true
        }
    }
}

function closeModalActionCreator(): CloseModalAction {
    return {
        type: ActionType.CLOSE_MODAL,
        payload: {
            modal: false
        }
    }
}


export {
    ActionType,
    openModalActionCreator,
    closeModalActionCreator,
}