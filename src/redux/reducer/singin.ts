import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISingIn {
    login: string,
    password: string,
}


const initialState: ISingIn = {
    login: '',
    password: ''
}

const singInSlice = createSlice({
    name: 'singIn',
    initialState,
    reducers: {
        setLogin(state, login: PayloadAction<string>) {
            state.login = login.payload;
        },
        setPassword(state, password: PayloadAction<string>) {
            state.password = password.payload;
        }
    }
})

export const {setLogin, setPassword} = singInSlice.actions;
export default singInSlice.reducer;