import {combineReducers, configureStore} from "@reduxjs/toolkit";
import singUpSlice from './reducer/singup.ts';
import singInSlice from './reducer/singin.ts';
import {authSlice} from "./reducer/auth.ts";

const rootReducer = combineReducers({
    singUp: singUpSlice,
    singIn: singInSlice,
    auth: authSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;