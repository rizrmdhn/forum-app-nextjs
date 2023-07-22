import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveThreadActionCreator } from '../thread/action';
import { receiveUserActionCreator } from '../user/action';
import api from '../../utils/api';

function asyncPopulateUsersAndThreads(): any {
    return async (dispatch: any) => {
        dispatch(showLoading());
        try {
            const users = await api.getAllUsers();
            const threads = await api.getAllThreads();

            dispatch(receiveUserActionCreator(users));
            dispatch(receiveThreadActionCreator(threads));
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncGetAllUsers(): any {
    return async (dispatch: any) => {
        dispatch(showLoading());
        try {
            const users = await api.getAllUsers();
            dispatch(receiveUserActionCreator(users));
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

export {
    asyncPopulateUsersAndThreads,
    asyncGetAllUsers,
}