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
    const data = {
        accessToken
    }
    return instance.post('/refresh-token', data)
}

const forGotPassword = (emailOrUserName: string) => {
    const data = {
        emailOrUsername: emailOrUserName
    }
    instance.put('/forgot-password', data)
}
export {register, reSendEmail, signIn, refreshToken, forGotPassword};
