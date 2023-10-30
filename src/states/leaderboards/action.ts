import { AnyAction } from '@reduxjs/toolkit'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { setIsLoadingActionCreator, unsetIsLoadingActionCreator } from '../isLoading/action'

enum ActionType {
  RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD',
}

export interface ILEADERBOARD {
  user: {
    id: string
    name: string
    email: string
    avatar: string
  }
  score: number
}

interface ReceiveLeaderboardAction {
  type: ActionType.RECEIVE_LEADERBOARD
  payload: {
    leaderboard: ILEADERBOARD[]
  }
}

export type LeaderboardAction = ReceiveLeaderboardAction | AnyAction

function receiveLeaderboardActionCreator(leaderboard: ILEADERBOARD[]): ReceiveLeaderboardAction {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  }
}

function asyncGetLeaderboard(): any {
  return async (dispatch: any) => {
    dispatch(showLoading())
    dispatch(setIsLoadingActionCreator())
    try {
      const leaderboard = await api.getLeaderboards()
      dispatch(receiveLeaderboardActionCreator(leaderboard))
    } catch (error: any) {
      throw new Error(error)
    }
    dispatch(hideLoading())
    dispatch(unsetIsLoadingActionCreator())
  }
}

export { ActionType, receiveLeaderboardActionCreator, asyncGetLeaderboard }
