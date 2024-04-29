export interface IRegister {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

interface ISuccessfullyRegister {
    message: string;
    username: string;
}

interface ICreatedRegister {
    message: string;
    username: string;
}

interface IInvalidRegister {
    message: string;
    username: string;
}

interface IAlreadyTakenRegister {
    message: string;
    username: string;
}

export type RegisterStatus = 200 | 201 | 400 | 409;

export interface IRegisterResponse<T> {
    status: RegisterStatus;
    data: T;
}

export type RegisterResponseType =
    | ISuccessfullyRegister
    | ICreatedRegister
    | IInvalidRegister
    | IAlreadyTakenRegister;

export type RegisterResponse = IRegisterResponse<RegisterResponseType>;
