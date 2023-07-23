import { ActionType, OpenModalActions } from "./action";

export type IState = boolean;

const initialState: IState = false;

function openModalReducer(state: IState = initialState, action: OpenModalActions): IState {
    switch (action.type) {
        case ActionType.OPEN_MODAL:
            return action.payload.modal;
        case ActionType.CLOSE_MODAL:
            return action.payload.modal;
        default:
            return state;
    }
}

export default openModalReducer;