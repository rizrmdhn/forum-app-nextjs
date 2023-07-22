import { AnyAction } from "redux";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '@/utils/api';
import { AppDispatch, AppGetState } from "..";
import { notFound } from "next/navigation";
import { setIsLoadingActionCreator, unsetIsLoadingActionCreator } from "../isLoading/action";

enum ActionType {
    RECEIVE_THREADS_DETAIL = 'RECEIVE_THREADS_DETAIL',
    UP_VOTE_THREAD_DETAIL = 'UP_VOTE_THREAD_DETAIL',
    DOWN_VOTE_THREAD_DETAIL = 'DOWN_VOTE_THREAD_DETAIL',
    NEUTRAL_VOTE_THREAD_DETAIL = 'NEUTRAL_VOTE_THREAD_DETAIL',
    CREATE_COMMENT_THREAD_DETAIL = 'CREATE_COMMENT_THREAD_DETAIL',
    UP_VOTE_COMMENT_THREAD_DETAIL = 'UP_VOTE_COMMENT_THREAD_DETAIL',
    DOWN_VOTE_COMMENT_THREAD_DETAIL = 'DOWN_VOTE_COMMENT_THREAD_DETAIL',
    NEUTRAL_VOTE_COMMENT_THREAD_DETAIL = 'NEUTRAL_VOTE_COMMENT_THREAD_DETAIL',
}

export interface IOwner {
    id: string;
    name: string;
    avatar: string;
}

export interface IThreadComment {
    id: string;
    content: string;
    createdAt: string;
    upVotesBy: string[];
    downVotesBy: string[];
    owner: IOwner;
}

export interface IThreadDetail {
    id: string;
    title: string;
    body: string;
    category: string;
    createdAt: string;
    owner: IOwner;
    upVotesBy: string[];
    downVotesBy: string[];
    comments: IThreadComment[];
}

interface ReceiveThreadsDetailAction {
    type: ActionType.RECEIVE_THREADS_DETAIL;
    payload: {
        threadDetail: IThreadDetail[];
    }
}

interface UpVoteThreadDetailAction {
    type: ActionType.UP_VOTE_THREAD_DETAIL;
    payload: {
        threadId: string;
        userId: string;
    }
}

interface DownVoteThreadDetailAction {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL;
    payload: {
        threadId: string;
        userId: string;
    }
}

interface NeutralVoteThreadDetailAction {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL;
    payload: {
        threadId: string;
        userId: string;
    }
}

interface CreateCommentThreadDetailAction {
    type: ActionType.CREATE_COMMENT_THREAD_DETAIL;
    payload: {
        threadId: string;
        comment: IThreadComment;
    }
}

interface UpVoteCommentThreadDetailAction {
    type: ActionType.UP_VOTE_COMMENT_THREAD_DETAIL;
    payload: {
        threadId: string;
        commentId: string;
        userId: string;
    }
}

interface DownVoteCommentThreadDetailAction {
    type: ActionType.DOWN_VOTE_COMMENT_THREAD_DETAIL;
    payload: {
        threadId: string;
        commentId: string;
        userId: string;
    }
}

interface NeutralVoteCommentThreadDetailAction {
    type: ActionType.NEUTRAL_VOTE_COMMENT_THREAD_DETAIL;
    payload: {
        threadId: string;
        commentId: string;
        userId: string;
    }
}

export type ThreadDetailAction = ReceiveThreadsDetailAction 
    | UpVoteThreadDetailAction
    | DownVoteThreadDetailAction
    | NeutralVoteThreadDetailAction
    | CreateCommentThreadDetailAction
    | UpVoteCommentThreadDetailAction
    | DownVoteCommentThreadDetailAction
    | NeutralVoteCommentThreadDetailAction
    | AnyAction;

function receiveThreadsDetailActionCreator(threadDetail: IThreadDetail[]): ReceiveThreadsDetailAction {
    return {
        type: ActionType.RECEIVE_THREADS_DETAIL,
        payload: {
            threadDetail
        },
    };
}

function upVoteThreadDetailActionCreator(threadId: string, userId: string): UpVoteThreadDetailAction {
    return {
        type: ActionType.UP_VOTE_THREAD_DETAIL,
        payload: {
            threadId,
            userId
        },
    };
}

function downVoteThreadDetailActionCreator(threadId: string, userId: string): DownVoteThreadDetailAction {
    return {
        type: ActionType.DOWN_VOTE_THREAD_DETAIL,
        payload: {
            threadId,
            userId
        },
    };
}

function neutralVoteThreadDetailActionCreator(threadId: string, userId: string): NeutralVoteThreadDetailAction {
    return {
        type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
        payload: {
            threadId,
            userId
        },
    };
}

function createCommentThreadDetailActionCreator(threadId: string, comment: IThreadComment): CreateCommentThreadDetailAction {
    return {
        type: ActionType.CREATE_COMMENT_THREAD_DETAIL,
        payload: {
            threadId,
            comment
        },
    };
}

function upVoteCommentThreadDetailActionCreator(threadId: string, commentId: string, userId: string): UpVoteCommentThreadDetailAction {
    return {
        type: ActionType.UP_VOTE_COMMENT_THREAD_DETAIL,
        payload: {
            threadId,
            commentId,
            userId
        },
    };
}

function downVoteCommentThreadDetailActionCreator(threadId: string, commentId: string, userId: string): DownVoteCommentThreadDetailAction {
    return {
        type: ActionType.DOWN_VOTE_COMMENT_THREAD_DETAIL,
        payload: {
            threadId,
            commentId,
            userId
        },
    };
}

function neutralVoteCommentThreadDetailActionCreator(threadId: string, commentId: string, userId: string): NeutralVoteCommentThreadDetailAction {
    return {
        type: ActionType.NEUTRAL_VOTE_COMMENT_THREAD_DETAIL,
        payload: {
            threadId,
            commentId,
            userId
        },
    };
}

function asyncGetThreadsDetail(threadId: any): any {
    return async (dispatch: any) => {
        dispatch(showLoading());
        dispatch(setIsLoadingActionCreator());
        try {
            const threadDetail = await api.getThreadById(threadId);
            dispatch(receiveThreadsDetailActionCreator(threadDetail));
        } catch (error: any) {
            notFound();
        }
        dispatch(hideLoading());
        setTimeout(() => {
            dispatch(unsetIsLoadingActionCreator());
        }, 1000);
    }
}

function asyncUpVoteThreadDetail(threadId: string): any {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        dispatch(showLoading());
        const {authUser} = getState();
        if (!authUser) {
            throw new Error('User is not authenticated');
        }

        dispatch(upVoteThreadDetailActionCreator(threadId, authUser.id));
        try {
            await api.upVoteThread(threadId);
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncDownVoteThreadDetail(threadId: string): any {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        dispatch(showLoading());
        const {authUser} = getState();
        if (!authUser) {
            throw new Error('User is not authenticated');
        }

        dispatch(downVoteThreadDetailActionCreator(threadId, authUser.id));
        try {
            await api.downVoteThread(threadId);
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncNeutralVoteThreadDetail(threadId: string): any {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        dispatch(showLoading());
        const {authUser} = getState();
        if (!authUser) {
            throw new Error('User is not authenticated');
        }

        dispatch(neutralVoteThreadDetailActionCreator(threadId, authUser.id));
        try {
            await api.neturalVoteThread(threadId);
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncCreateCommentThreadDetail(threadId: string, content: string): any {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        dispatch(showLoading())
        try {
            const comment = await api.createComment({ threadId, content });
            dispatch(createCommentThreadDetailActionCreator(threadId, comment));

            const threadDetail = await api.getThreadById(threadId)
            dispatch(receiveThreadsDetailActionCreator(threadDetail))
        } catch (error: any) {
            throw new Error(error)
        }
        dispatch(hideLoading())
    }       
}

function asyncUpVoteCommentThreadDetail(threadId: string, commentId: string): any {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        dispatch(showLoading());
        const {authUser} = getState();
        if (!authUser) {
            throw new Error('User is not authenticated');
        }

        dispatch(upVoteCommentThreadDetailActionCreator(threadId, commentId, authUser.id));
        try {
            await api.upVoteComment({threadId, commentId});
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncDownVoteCommentThreadDetail(threadId: string, commentId: string): any {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        dispatch(showLoading());
        const {authUser} = getState();
        if (!authUser) {
            throw new Error('User is not authenticated');
        }

        dispatch(downVoteCommentThreadDetailActionCreator(threadId, commentId, authUser.id));
        try {
            await api.downVoteComment({threadId, commentId});
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

function asyncNeutralVoteCommentThreadDetail(threadId: string, commentId: string): any {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        dispatch(showLoading());
        const {authUser} = getState();
        if (!authUser) {
            throw new Error('User is not authenticated');
        }

        dispatch(neutralVoteCommentThreadDetailActionCreator(threadId, commentId, authUser.id));
        try {
            await api.neutralVoteComment({threadId, commentId});
        } catch (error: any) {
            throw new Error(error);
        }
        dispatch(hideLoading());
    }
}

export {
    ActionType,
    asyncGetThreadsDetail,
    asyncUpVoteThreadDetail,
    asyncDownVoteThreadDetail,
    asyncNeutralVoteThreadDetail,
    asyncCreateCommentThreadDetail,
    asyncUpVoteCommentThreadDetail,
    asyncDownVoteCommentThreadDetail,
    asyncNeutralVoteCommentThreadDetail,
}