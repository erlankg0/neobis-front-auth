import {combineReducers, configureStore} from "@reduxjs/toolkit";
import singSlice from './reducer/singup.ts';

const rootReducer = combineReducers({
    singUp: singSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;