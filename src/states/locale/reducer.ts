import { ActionType, LocaleAction } from "./action";

export type IState = string;

const initialState: IState = 'id';

function localeReducer(state: IState = initialState, action: LocaleAction): IState {
    switch (action.type) {
        case ActionType.SET_LOCALE:
            return action.payload.locale;
        default:
            return state;
    }
}

export default localeReducer;