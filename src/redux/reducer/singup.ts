import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISingUp {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}


const initialState: ISingUp = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
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
        clear(state) {
            state.email = '';
            state.username = '';
            state.password = '';
            state.confirmPassword = '';
        }

    }
})

export const {setEmail, setUserName, setPassword, setConfirmPassword, clear} = singUpSlice.actions;
export default singUpSlice.reducer;