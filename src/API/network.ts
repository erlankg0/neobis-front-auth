import axios, {AxiosResponse} from "axios";
import {IRegister, IRegisterResponse, RegisterStatus} from "./register";
import {ISignIn} from "./singin.ts";

const instance = axios.create({
    baseURL: 'https://reliable-courage-neoauth.up.railway.app/api/auth',
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json'
    },
})

const register = (data: IRegister): Promise<IRegisterResponse<RegisterStatus>> => {
    console.log(data);
    return instance.post('/register', data);
}

const reSendEmail = (email: string) => {
    const data = {
        "email": email
    }
    return instance.post('/resend-email', data);
}

const signIn = (data: ISignIn): Promise<AxiosResponse> => {
    console.log(data);
    return instance.post('/login', data);
}

const refreshToken = (accessToken: string) => {
    return instance.post(`/refresh-token?refreshToken=${accessToken}`)
}

const forGotPassword = (emailOrUserName: string) => {
    const data = {
        emailOrUsername: emailOrUserName
    }
    return instance.put('/forgot-password', data)
}
const resetPassword = (token: string, newPassword: string, confirmNewPassword: string) => {
    const data = {
        newPassword, confirmNewPassword
    }
    return instance.put(`/reset-password?resetToken=${token}`, data);
}
export {register, reSendEmail, signIn, refreshToken, forGotPassword, resetPassword};
