import { AnyAction } from "@reduxjs/toolkit";


enum ActionType {
    CHANGE_THEME = 'CHANGE_THEME',
}

interface ChangeThemeAction {
    type: ActionType.CHANGE_THEME;
    payload: {
        theme: string;
    }
}

export type ThemeAction = ChangeThemeAction | AnyAction;

function changeThemeActionCreator(theme: string): ChangeThemeAction {
    return {
        type: ActionType.CHANGE_THEME,
        payload: {
            theme
        }
    }
}

export {
    ActionType,
    changeThemeActionCreator,
}