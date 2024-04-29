import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISingUp {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    emailValid: boolean,
    usernameValid: boolean,
    passwordValid: boolean,
    confirmPasswordValid: boolean
}


const initialState: ISingUp = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    emailValid: false,
    usernameValid: false,
    passwordValid: false,
    confirmPasswordValid: false

}

const singUpSlice = createSlice({
    name: 'singUp',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setUserName(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setConfirmPassword(state, action: PayloadAction<string>) {
            state.confirmPassword = action.payload;
        },
    }
})

export const {setEmail, setUserName, setPassword, setConfirmPassword} = singUpSlice.actions;
export default singUpSlice.reducer;