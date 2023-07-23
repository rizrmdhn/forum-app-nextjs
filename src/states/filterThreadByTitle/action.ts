import { AnyAction } from "@reduxjs/toolkit";

enum ActionType {
    SET_FILTER_THREAD_BY_TITLE = 'SET_FILTER_THREAD_BY_TITLE',
}

interface SetFilterThreadByTitleAction {
    type: ActionType.SET_FILTER_THREAD_BY_TITLE;
    payload: {
        filterThreadByTitle: string;
    }
}

export type FilterThreadByTitleAction = SetFilterThreadByTitleAction | AnyAction;

function setFilterThreadByTitleActionCreator(filterThreadByTitle: string): SetFilterThreadByTitleAction {
    return {
        type: ActionType.SET_FILTER_THREAD_BY_TITLE,
        payload: {
            filterThreadByTitle
        }
    }
}

export {
    ActionType,
    setFilterThreadByTitleActionCreator,
}