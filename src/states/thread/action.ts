import { AnyAction } from 'redux'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { IThread } from './reducer'
import api from '@/utils/api'
import myToast from '@/components/myToast'
import { AppDispatch, AppGetState } from '..'

enum ActionType {
  RECEIVE_THREAD = 'RECEIVE_THREAD',
  CREATE_THREAD = 'CREATE_THREAD',
  UP_VOTE_THREAD = 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD = 'DOWN_VOTE_THREAD',
  NETURAL_VOTE_THREAD = 'NETURAL_VOTE_THREAD',
}

interface ReceiveThreadAction {
  type: ActionType.RECEIVE_THREAD
  payload: {
    threads: IThread[]
  }
}

interface CreateThreadAction {
  type: ActionType.CREATE_THREAD
  payload: {
    threads: IThread
  }
}

interface UpVoteThreadAction {
  type: ActionType.UP_VOTE_THREAD
  payload: {
    threadId: string
    userId: string
  }
}

interface DownVoteThreadAction {
  type: ActionType.DOWN_VOTE_THREAD
  payload: {
    threadId: string
    userId: string
  }
}

interface NeturalVoteThreadAction {
  type: ActionType.NETURAL_VOTE_THREAD
  payload: {
    threadId: string
    userId: string
  }
}

export type Action =
  | ReceiveThreadAction
  | CreateThreadAction
  | UpVoteThreadAction
  | DownVoteThreadAction
  | NeturalVoteThreadAction
  | AnyAction

function receiveThreadActionCreator(threads: IThread[]): ReceiveThreadAction {
  return {
    type: ActionType.RECEIVE_THREAD,
    payload: {
      threads,
    },
  }
}

function createThreadActionCreator(threads: IThread): CreateThreadAction {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      threads,
    },
  }
}

function upVoteThreadActionCreator(threadId: string, userId: string): UpVoteThreadAction {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  }
}

function downVoteThreadActionCreator(threadId: string, userId: string): DownVoteThreadAction {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  }
}

function neturalVoteThreadActionCreator(threadId: string, userId: string): NeturalVoteThreadAction {
  return {
    type: ActionType.NETURAL_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  }
}

function asyncCreateThread({
  title,
  body,
  category,
  textThreadCreated,
  textErrorCreateThread,
}: {
  title: string
  body: string
  category: string
  textThreadCreated: string
  textErrorCreateThread: string
}): any {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading())
    try {
      const threads: any = await api.createThread({ title, body, category })
      dispatch(createThreadActionCreator(threads))

      myToast.fire({
        icon: 'success',
        title: textThreadCreated,
      })
    } catch (error: any) {
      myToast.fire({
        icon: 'error',
        title: textErrorCreateThread,
      })
    }
    dispatch(hideLoading())
  }
}

function asyncUpVoteThread(
  threadId: string,
  textLoginToVote: string,
  textUpVoteSuccess: string,
  textErrorUpVote: string,
): any {
  return async (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(showLoading())
    const { authUser } = getState()
    if (!authUser) {
      return myToast.fire({
        icon: 'error',
        title: textLoginToVote,
      })
    }

    dispatch(upVoteThreadActionCreator(threadId, authUser.id))
    try {
      await api.upVoteThread(threadId)

      myToast.fire({
        icon: 'success',
        title: textUpVoteSuccess,
      })
    } catch (error: any) {
      myToast.fire({
        icon: 'error',
        title: textErrorUpVote,
      })
      dispatch(upVoteThreadActionCreator(threadId, authUser.id))
    }
    dispatch(hideLoading())
  }
}

function asyncDownVoteThread(
  threadId: string,
  textLoginToVote: string,
  textDownVoteSuccess: string,
  textErrorDownVote: string,
): any {
  return async (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(showLoading())
    const { authUser } = getState()
    if (!authUser) {
      return myToast.fire({
        icon: 'error',
        title: textLoginToVote,
      })
    }

    dispatch(downVoteThreadActionCreator(threadId, authUser.id))
    try {
      await api.downVoteThread(threadId)

      myToast.fire({
        icon: 'success',
        title: textDownVoteSuccess,
      })
    } catch (error: any) {
      myToast.fire({
        icon: 'error',
        title: textErrorDownVote,
      })
      dispatch(downVoteThreadActionCreator(threadId, authUser.id))
    }
    dispatch(hideLoading())
  }
}

function asyncNeturalVoteThread(
  threadId: string,
  textLoginToVote: string,
  textRemoveVoteSuccess: string,
  textErrorRemoveVote: string,
): any {
  return async (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(showLoading())
    const { authUser } = getState()
    if (!authUser) {
      return myToast.fire({
        icon: 'error',
        title: textLoginToVote,
      })
    }

    dispatch(neturalVoteThreadActionCreator(threadId, authUser.id))
    try {
      await api.neturalVoteThread(threadId)

      myToast.fire({
        icon: 'success',
        title: textRemoveVoteSuccess,
      })
    } catch (error: any) {
      myToast.fire({
        icon: 'error',
        title: textErrorRemoveVote,
      })
      dispatch(neturalVoteThreadActionCreator(threadId, authUser.id))
    }
    dispatch(hideLoading())
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
