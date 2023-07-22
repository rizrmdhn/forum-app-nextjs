import {ActionType, Action as ThreadAction} from './action';

export interface IThread {
    id: string;
    title: string;
    body: string;
    category: string;
    createdAt: string;
    ownerId: string;
    upVotesBy: string[];
    downVotesBy: string[];
    totalComments: number;
}

export type State  = IThread[];

const initialState: State = [];

function threadReducer(state: State = initialState, action: ThreadAction): State {
    switch (action.type) {
        case ActionType.RECEIVE_THREAD:
            return action.payload.threads;
        case ActionType.CREATE_THREAD:
            return [action.payload.threads, ...state];
        case ActionType.UP_VOTE_THREAD:
            return state.map((thread) => {
                if (thread.id === action.payload.threadId) {
                    return {
                        ...thread,
                        upVotesBy: thread.upVotesBy.includes(action.payload.userId)
                            ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
                            : thread.upVotesBy.concat([action.payload.userId]),
                        downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
                    }
                }
                return thread;
            });
        case ActionType.DOWN_VOTE_THREAD:
            return state.map((thread) => {
                if (thread.id === action.payload.threadId) {
                    return {
                        ...thread,
                        upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
                        downVotesBy: thread.downVotesBy.includes(action.payload.userId)
                            ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
                            : thread.downVotesBy.concat([action.payload.userId]),
                    }
                }
                return thread;
            });
        case ActionType.NETURAL_VOTE_THREAD:
            return state.map((thread) => {
                if (thread.id === action.payload.threadId) {
                    return {
                        ...thread,
                        upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
                        downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
                    }
                }
                return thread;
            });
        default:
            return state;
    }
}

export default threadReducer;