import { ActionType, FilterThreadByTitleAction } from "./action";

export type IState = string;

const initialState: IState = '';

function filterThreadByTitleReducer(state: IState = initialState, action: FilterThreadByTitleAction): IState {
    switch (action.type) {
        case ActionType.SET_FILTER_THREAD_BY_TITLE:
            return action.payload.filterThreadByTitle;
        default:
            return state;
    }
}

export default filterThreadByTitleReducer;