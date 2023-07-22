import { ActionType, IsPreloadAction } from "./action";

export type IState = null | boolean;

const initialState: IState = true;

function isPreloadReducer(state: IState = initialState, action: IsPreloadAction): IState {
    switch (action.type) {
        case ActionType.SET_IS_PRELOAD:
            return action.payload.isPreload;
        default:
            return state;
    }
}

export default isPreloadReducer;