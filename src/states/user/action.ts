import { AnyAction } from "redux";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import myToast from "@/components/myToast";

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

function asyncRegisterUser({name, email, password, router}:
    {
        name: string,
        email: string,
        password: string,
        router: any
    }): any {
        return async (dispatch: any) => {
            dispatch(showLoading());
            try {
                await api.register({name, email, password});
                myToast.fire({
                    icon: 'success',
                    title: 'Register success'
                })
                router.push('/login');
            } catch (error: any) {
                myToast.fire({
                    icon: 'error',
                    title: error.message
                })
            }
            dispatch(hideLoading());
        }
    }

export {
    ActionType,
    receiveUserActionCreator,
    asyncRegisterUser,
}