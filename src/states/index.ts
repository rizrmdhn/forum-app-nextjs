import { configureStore } from '@reduxjs/toolkit'
import setShowMenuReducer from './setShowMenu/reducer'
import showCategoryReducer from './showCategory/reducer'
import threadReducer from './thread/reducer'
import userReducer from './user/reducer'
import filterThreadByCategoryReducer from './filterThreadByCategory/reducer'
import filterThreadByTitleReducer from './filterThreadByTitle/reducer'
import threadDetailReducer from './detailThread/reducer'
import leaderboardReducer from './leaderboards/reducer'
import authUserReducer from './authUser/reducer'
import isLoadingReducer from './isLoading/reducer'
import isPreloadReducer from './isPreload/reducer'
import openModalReducer from './openModal/reducer'
import localeReducer from './locale/reducer'
import themeReducer from './theme/reducer'

export const store = configureStore({
  reducer: {
    showMenu: setShowMenuReducer,
    showCategory: showCategoryReducer,
    authUser: authUserReducer,
    thread: threadReducer,
    user: userReducer,
    category: filterThreadByCategoryReducer,
    threadTitle: filterThreadByTitleReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
    isLoading: isLoadingReducer,
    isPreload: isPreloadReducer,
    openModal: openModalReducer,
    locale: localeReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppGetState = typeof store.getState
