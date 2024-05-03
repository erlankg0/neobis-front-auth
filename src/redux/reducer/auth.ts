import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
    authData: {
        username: string | null,
        accessToken: string | null,
        refreshToken: string | null,
        isLoading: boolean,
        error: string | null,
    },
    profileData: {
        profile: string | null,
        isLoading: boolean,
        error: string | null
    }
}

interface IAuthToken {
    accessToken: string,
    refreshToken: string | null,
    username: string | null,
}

const initialState: AuthState = {
    authData: {
        username: null,
        accessToken: null,
        refreshToken: null,
        isLoading: false,
        error: null
    },
    profileData: {
        profile: null,
        isLoading: false,
        error: null
    }
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state): AuthState => ({
            ...state,
            authData: {
                ...state.authData,
                isLoading: true,
            }
        }),
        loginSuccess: (state, action: PayloadAction<IAuthToken>): AuthState => ({
            ...state,
            authData: {
                ...state.authData,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                username: action.payload.username,
                isLoading: false,
                error: null
            }
        }),
        loginError: (state, action: PayloadAction<string>): AuthState => ({
            ...state,
            profileData: {
                ...state.profileData,
                isLoading: false,
                error: action.payload,
            }
        }),
        setRefreshToken: (state, action: PayloadAction<string>) => ({
            ...state,
            authData: {
                ...state.authData,
                refreshToken: action.payload,
                isLoading: false
            }
        }),
        loadProfileStart: (state): AuthState => ({
            ...state,
            profileData: {
                ...state.profileData,
                isLoading: true,
            }
        }),
        loadProfileSuccess: (state, action: PayloadAction<string>): AuthState => ({
            ...state,
            profileData: {
                ...state.profileData,
                profile: action.payload,
                isLoading: false,
                error: null
            }
        }),
        loadProfileError: (state, action: PayloadAction<string>): AuthState => ({
            ...state,
            profileData: {
                ...state.profileData,
                isLoading: false,
                error: action.payload
            }
        }),
        logoutSuccess: (): AuthState => initialState,
    }
})


export const {
    loginStart,
    loginSuccess,
    loginError,
    setRefreshToken,
    loadProfileStart,
    loadProfileSuccess,
    loadProfileError,
    logoutSuccess
} = authSlice.actions;
export default authSlice.reducer;