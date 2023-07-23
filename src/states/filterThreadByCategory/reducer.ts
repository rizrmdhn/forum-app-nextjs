import { ActionType, FilterThreadByCategoryAction } from "./action";

export type IState = string;

const initialState: IState = '';

function filterThreadByCategoryReducer(state: IState = initialState, action: FilterThreadByCategoryAction): IState {
    switch (action.type) {
        case ActionType.SET_FILTER_THREAD_BY_CATEGORY:
            return action.payload.filterThreadByCategory;
        default:
            return state;
    }
}

export default filterThreadByCategoryReducer;