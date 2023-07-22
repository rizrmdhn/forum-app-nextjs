import { AnyAction } from "redux";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

enum ActionType {
    RECEIVE_USER = 'RECEIVE_USER',
}

export interface IUSER {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

interface ReceiveUserAction {
    type: ActionType.RECEIVE_USER;
    payload: {
        users: IUSER[];
    };
}

export type UserAction = ReceiveUserAction | AnyAction;

function receiveUserActionCreator(users: IUSER[]): ReceiveUserAction {
    return {
        type: ActionType.RECEIVE_USER,
        payload: {
            users
        },
    };
}

function asyncRegisterUser({name, email, password}:
    {
        name: string,
        email: string,
        password: string,
    }) {
        return async (dispatch: any) => {
            dispatch(showLoading());
            try {
                await api.register({name, email, password});
            } catch (error: any) {
                throw new Error(error);
            }
            dispatch(hideLoading());
        }
    }

export {
    ActionType,
    receiveUserActionCreator,
    asyncRegisterUser,
}