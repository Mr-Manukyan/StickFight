import { configureStore, ThunkAction, Action,combineReducers } from '@reduxjs/toolkit';
import { gameReducer } from '../Reducers/GameReducer';


const rootReducer = combineReducers({
    gamePage : gameReducer,

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })

export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof store.getState>

export type InferActionsTypes<T> = T extends { [key : string] : (...arg:any[]) => infer U } ? U : never 
export type BaseThunkType<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown,Action>

//@ts-ignore
window.store = store


