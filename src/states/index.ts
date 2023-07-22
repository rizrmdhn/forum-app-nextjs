import { configureStore } from "@reduxjs/toolkit";
import setShowMenuReducer from "./setShowMenu/reducer";
import threadReducer from "./thread/reducer";
import userReducer from "./user/reducer";
import leaderboardReducer from "./leaderboards/reducer";


export const store = configureStore({
  reducer: {
    showMenu: setShowMenuReducer,
    thread: threadReducer,
    user: userReducer,
    leaderboard: leaderboardReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
