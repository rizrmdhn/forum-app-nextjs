import { configureStore } from "@reduxjs/toolkit";
import setShowMenuReducer from "./setShowMenu/reducer";
import threadReducer from "./thread/reducer";
import userReducer from "./user/reducer";
import threadDetailReducer from "./detailThread/reducer";
import leaderboardReducer from "./leaderboards/reducer";
import authUserReducer from "./authUser/reducer";
import isLoadingReducer from "./isLoading/reducer";
import isPreloadReducer from "./isPreload/reducer";

export const store = configureStore({
  reducer: {
    showMenu: setShowMenuReducer,
    authUser: authUserReducer,
    thread: threadReducer,
    user: userReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
    isLoading: isLoadingReducer,
    isPreload: isPreloadReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
