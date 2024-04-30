import {combineReducers, configureStore} from "@reduxjs/toolkit";
import singUpSlice from './reducer/singup.ts';
import singInSlice from './reducer/singin.ts';

const rootReducer = combineReducers({
    singUp: singUpSlice,
    singIn: singInSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;