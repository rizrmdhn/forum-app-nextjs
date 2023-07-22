import { ActionType, LeaderboardAction, ILEADERBOARD } from "./action";

export type IState = ILEADERBOARD[];

const initialState: IState = [];

function leaderboardReducer(state: IState = initialState, action: LeaderboardAction): IState {
    switch (action.type) {
        case ActionType.RECEIVE_LEADERBOARD:
            return action.payload.leaderboard;
        default:
            return state;
    }
}

export default leaderboardReducer;