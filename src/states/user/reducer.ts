import { ActionType, IUSER, UserAction } from "./action";

export type IState = IUSER[];
const initialState: IState = []

function userReducer(state: IState = initialState, action: UserAction): IState {
    switch (action.type) {
        case ActionType.RECEIVE_USER:
            return action.payload.users;
        default:
            return state;
    }
}

export default userReducer;