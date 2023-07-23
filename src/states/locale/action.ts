import { AnyAction } from "@reduxjs/toolkit";

enum ActionType {
    SET_LOCALE = 'SET_LOCALE',
}

interface SetLocaleAction {
    type: ActionType.SET_LOCALE;
    payload: {
        locale: string;
    }
}

export type LocaleAction = SetLocaleAction | AnyAction;

function setLocaleActionCreator(locale: string): SetLocaleAction {
    return {
        type: ActionType.SET_LOCALE,
        payload: {
            locale
        }
    }
}

export {
    ActionType,
    setLocaleActionCreator,
}