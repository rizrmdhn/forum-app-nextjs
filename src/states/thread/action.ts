import { AnyAction } from "redux";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { IThread } from './reducer';
import api from '@/utils/api';

enum ActionType {
    RECEIVE_THREAD = 'RECEIVE_THREAD',
    CREATE_THREAD = 'CREATE_THREAD',
    UP_VOTE_THREAD = 'UP_VOTE_THREAD',
    DOWN_VOTE_THREAD = 'DOWN_VOTE_THREAD',
    NETURAL_VOTE_THREAD = 'NETURAL_VOTE_THREAD',
}

interface ReceiveThreadAction {
    type: ActionType.RECEIVE_THREAD;
    payload: {
        threads: IThread[];
    }
}

interface CreateThreadAction {
    type: ActionType.CREATE_THREAD;
    payload: {
        threads: IThread;
    }
}

interface UpVoteThreadAction {
    type: ActionType.UP_VOTE_THREAD;
    payload: {
        threadId: string,
        userId: string,
    }
}

interface DownVoteThreadAction {
    type: ActionType.DOWN_VOTE_THREAD;
    payload: {
        threadId: string,
        userId: string,
    }
}

interface NeturalVoteThreadAction {
    type: ActionType.NETURAL_VOTE_THREAD;
    payload: {
        threadId: string,
        userId: string,
    }
}

export type Action = ReceiveThreadAction | CreateThreadAction | UpVoteThreadAction | DownVoteThreadAction | NeturalVoteThreadAction | AnyAction;

function receiveThreadActionCreator(threads: []): ReceiveThreadAction {
    return {
        type: ActionType.RECEIVE_THREAD,
        payload: {
            threads,
        },
    };
}

function createThreadActionCreator(threads: IThread): CreateThreadAction {
    return {
        type: ActionType.CREATE_THREAD,
        payload: {
            threads,
        },
    };
}

function upVoteThreadActionCreator(threadId: string, userId: string): UpVoteThreadAction {
    return {
        type: ActionType.UP_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function downVoteThreadActionCreator(threadId: string, userId: string): DownVoteThreadAction {
    return {
        type: ActionType.DOWN_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function neturalVoteThreadActionCreator(threadId: string, userId: string): NeturalVoteThreadAction {
    return {
        type: ActionType.NETURAL_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function asyncCreateThread({title, body, category}: {
    title: string,
    body: string,
    category: string,   
}) {
    return async (dispatch: any) => {
        dispatch(showLoading());
        try {
            const threads = await api.createThread({title, body, category});
        dispatch(createThreadActionCreator(threads));
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncUpVoteThread(threadId: string) {
    return async (dispatch: any, getState: any) => {
        dispatch(showLoading());
        const { authedUser } = getState();
        dispatch(upVoteThreadActionCreator(threadId, authedUser.id));
        try {
            const threads = await api.upVoteThread(threadId);
            dispatch(upVoteThreadActionCreator(threadId, authedUser.id));
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncDownVoteThread(threadId: string) {
    return async (dispatch: any, getState: any) => {
        dispatch(showLoading());
        const { authedUser } = getState();
        dispatch(downVoteThreadActionCreator(threadId, authedUser.id));
        try {
            const threads = await api.downVoteThread(threadId);
            dispatch(downVoteThreadActionCreator(threadId, authedUser.id));
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncNeturalVoteThread(threadId: string) {
    return async (dispatch: any, getState: any) => {
        dispatch(showLoading());
        const { authedUser } = getState();
        dispatch(neturalVoteThreadActionCreator(threadId, authedUser.id));
        try {
            const threads = await api.neturalVoteThread(threadId);
            dispatch(neturalVoteThreadActionCreator(threadId, authedUser.id));
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

export {
    ActionType,
    receiveThreadActionCreator,
    createThreadActionCreator,
    upVoteThreadActionCreator,
    downVoteThreadActionCreator,
    neturalVoteThreadActionCreator,
    asyncCreateThread,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeturalVoteThread,
}