import { AnyAction } from "redux";

enum ActionType {
    SET_SHOW_CATEGORY = 'SET_SHOW_CATEGORY',
}

interface SetShowCategoryAction {
    type: ActionType.SET_SHOW_CATEGORY;
    payload: {
        showCategory: boolean;
    }
}

export type ShowCategoryAction = SetShowCategoryAction | AnyAction;

function setShowCategoryActionCreator(showCategory: boolean): SetShowCategoryAction {
    return {
        type: ActionType.SET_SHOW_CATEGORY,
        payload: {
            showCategory
        },
    };
}

export {
    ActionType,
    setShowCategoryActionCreator
}