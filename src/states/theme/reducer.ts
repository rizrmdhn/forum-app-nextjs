import { ActionType } from "./action";

export type IState = string;

const initialState: IState = 'light';

function themeReducer(state: IState = initialState, action: any): IState {
    switch (action.type) {
        case ActionType.CHANGE_THEME:
            return action.payload.theme;
        default:
            return state;
    }
}

export default themeReducer;