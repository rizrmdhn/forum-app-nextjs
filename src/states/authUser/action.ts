import { AnyAction } from "redux";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from "../../utils/api";

enum ActionType {
    RECEIVE_AUTH_USER = 'RECEIVE_AUTH_USER',
    UNSET_AUTH_USER = 'UNSET_AUTH_USER',
}

export interface IAuthUser {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

interface ReceiveAuthUserAction {
    type: ActionType.RECEIVE_AUTH_USER;
    payload: {
        authUser: IAuthUser;
    }
}

interface UnsetAuthUserAction {
    type: ActionType.UNSET_AUTH_USER;
    payload: {}
}

export type AuthUserAction = ReceiveAuthUserAction | UnsetAuthUserAction | AnyAction;

function receiveAuthUserActionCreator(authUser: IAuthUser): ReceiveAuthUserAction {
    return {
        type: ActionType.RECEIVE_AUTH_USER,
        payload: {
            authUser
        },
    };
}

function unsetAuthUserActionCreator(): UnsetAuthUserAction {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {},
    };
}

function asyncSetAuthUser({email, password}: {
    email: string,
    password: string,
}) {
    return async (dispatch: any) => {
        dispatch(showLoading());
        try {
            const token = await api.login({email, password});
            api.putAccessToken(token);
            const authUser = await api.getOwnProfile();

            dispatch(receiveAuthUserActionCreator(authUser));
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncUnsetAuthUser() {
    return async (dispatch: any) => {
        dispatch(showLoading());
        try {
            api.putAccessToken('');
            dispatch(unsetAuthUserActionCreator());
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

export {
    ActionType,
    receiveAuthUserActionCreator,
    unsetAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
}