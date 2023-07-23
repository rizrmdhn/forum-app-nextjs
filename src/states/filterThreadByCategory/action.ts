import { AnyAction } from "@reduxjs/toolkit";


enum ActionType {
    SET_FILTER_THREAD_BY_CATEGORY = 'SET_FILTER_THREAD_BY_CATEGORY',
}

interface SetFilterThreadByCategoryAction {
    type: ActionType.SET_FILTER_THREAD_BY_CATEGORY;
    payload: {
        filterThreadByCategory: string;
    }
}

export type FilterThreadByCategoryAction = SetFilterThreadByCategoryAction | AnyAction;

function setFilterThreadByCategoryActionCreator(filterThreadByCategory: string): SetFilterThreadByCategoryAction {
    return {
        type: ActionType.SET_FILTER_THREAD_BY_CATEGORY,
        payload: {
            filterThreadByCategory
        }
    }
}

export {
    ActionType,
    setFilterThreadByCategoryActionCreator,
}