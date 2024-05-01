export interface ISignIn {
    username: string,
    password: string
}

export type SignInStatus = 401 | 200 | 403;

interface INotActive {
    time: Date,
    message: string
}

interface ISuccess {
    username: string,
    accessToken: string,
    refreshToken: string
}

interface INotEnabled {
    username: string,
    accessToken: string,
    refreshToken: string
}

export interface ISignInResponse<T> {
    status: SignInStatus,
    response: {
        data: T
    }
}

export type SignInType = INotActive | INotEnabled | ISuccess;

export type SignIn = ISignInResponse<SignInType>;
