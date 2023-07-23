import { ActionType, ShowCategoryAction } from "./action";

export type IState = boolean;

const initialState: IState = false;

function showCategoryReducer(state: IState = initialState, action: ShowCategoryAction): IState {
    switch (action.type) {
        case ActionType.SET_SHOW_CATEGORY:
            return action.payload.showCategory;
        default:
            return state;
    }
}

export default showCategoryReducer;