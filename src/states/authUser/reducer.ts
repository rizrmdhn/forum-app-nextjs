import { ActionType, AuthUserAction } from './action'
import { IUser } from '@/types'

export type IState = IUser | null

const initialState: IState = null

function authUserReducer(state: IState = initialState, action: AuthUserAction): IState {
  switch (action.type) {
    case ActionType.RECEIVE_AUTH_USER:
      return action.payload.authUser
    case ActionType.UNSET_AUTH_USER:
      return null
    default:
      return state
  }
}

export default authUserReducer
