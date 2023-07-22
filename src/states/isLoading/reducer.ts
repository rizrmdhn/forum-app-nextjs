import { ActionType, IsLoadingAction } from "./action";

export type IState = boolean;

const initialState: IState = false;

function isLoadingReducer(state: IState = initialState, action: IsLoadingAction): IState {
    switch (action.type) {
        case ActionType.SET_IS_LOADING:
            return action.payload.isLoading;
        case ActionType.UNSET_IS_LOADING:
            return action.payload.isLoading;
        default:
            return state;
    }
}

export default isLoadingReducer;