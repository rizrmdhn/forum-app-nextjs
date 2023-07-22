import { ActionType, IThreadDetail, ThreadDetailAction } from "./action";

export type IState =  null | IThreadDetail;

const initialState: IState = null;

function threadDetailReducer(
    state: IState = initialState,
    action: ThreadDetailAction
): IState {
    switch (action.type) {
        case ActionType.RECEIVE_THREADS_DETAIL:
            return action.payload.threadDetail;
        case ActionType.UP_VOTE_THREAD_DETAIL:
            if (state === null) {
                return state; // Return null if state is null
              }
            return {
                ...state,
                upVotesBy: state.upVotesBy.includes(action.payload.userId)
                    ? state.upVotesBy.filter((id) => id !== action.payload.userId)
                    : state.upVotesBy.concat([action.payload.userId]),
                downVotesBy: state.downVotesBy.filter((id) => id !== action.payload.userId),

            };
        case ActionType.DOWN_VOTE_THREAD_DETAIL:
            if (state === null) {
                return state; // Return null if state is null
              }
            return {
                ...state,
                upVotesBy: state.upVotesBy.filter((id) => id !== action.payload.userId),
                downVotesBy: state.downVotesBy.includes(action.payload.userId)
                    ? state.downVotesBy.filter((id) => id !== action.payload.userId)
                    : state.downVotesBy.concat([action.payload.userId]),
            };
        case ActionType.NEUTRAL_VOTE_THREAD_DETAIL:
            if (state === null) {
                return state; // Return null if state is null
              }
            return {
                ...state,
                upVotesBy: state.upVotesBy.filter((id) => id !== action.payload.userId),
                downVotesBy: state.downVotesBy.filter((id) => id !== action.payload.userId),
            };
        case ActionType.CREATE_COMMENT_THREAD_DETAIL:
            if (state === null) {
                return state; // Return null if state is null
              }
            return {
                ...state,
                comments: [...state.comments, action.payload.comment],
            }
        case ActionType.UP_VOTE_COMMENT_THREAD_DETAIL:
            if (state === null) {
                return state; // Return null if state is null
              }
            return {
                ...state,
                comments: state.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                                : comment.upVotesBy.concat([action.payload.userId]),
                            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
                        }
                    }
                    return comment;
                })
            }
        case ActionType.DOWN_VOTE_COMMENT_THREAD_DETAIL:
            if (state === null) {
                return state; // Return null if state is null
              }
            return {
                ...state,
                comments: state.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
                            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                                ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                                : comment.downVotesBy.concat([action.payload.userId]),
                        }
                    }
                    return comment;
                })
            }
        case ActionType.NEUTRAL_VOTE_COMMENT_THREAD_DETAIL:
            if (state === null) {
                return state; // Return null if state is null
              }
            return {
                ...state,
                comments: state.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
                            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
                        }
                    }
                    return comment;
                })
            }
        default:
            return state;
    }
}

export default threadDetailReducer;