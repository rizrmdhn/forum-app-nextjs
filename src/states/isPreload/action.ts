import { AnyAction } from '@reduxjs/toolkit'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { receiveAuthUserActionCreator } from '../authUser/action'

enum ActionType {
  SET_IS_PRELOAD = 'SET_IS_PRELOAD',
}

interface ISetIsPreloadAction {
  type: ActionType.SET_IS_PRELOAD
  payload: {
    isPreload: null | boolean
  }
}

export type IsPreloadAction = ISetIsPreloadAction | AnyAction

function setIsPreloadActionCreator(isPreload: null | boolean): ISetIsPreloadAction {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  }
}

function asyncSetIsPreload(): any {
  return async (dispatch: any) => {
    dispatch(showLoading())
    try {
      const authUser = await api.getOwnProfile()
      dispatch(receiveAuthUserActionCreator(authUser))
    } catch (error: any) {
      dispatch(setIsPreloadActionCreator(null))
    } finally {
      dispatch(setIsPreloadActionCreator(false))
    }
    dispatch(hideLoading())
  }
}

export { ActionType, setIsPreloadActionCreator, asyncSetIsPreload }
