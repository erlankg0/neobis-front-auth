import axios, {AxiosResponse} from "axios";
import {IRegister, IRegisterResponse, RegisterStatus} from "./register";
import {ISignIn} from "./singin.ts";

const instance = axios.create({
    baseURL: 'https://reliable-courage-neoauth.up.railway.app/api/auth',
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json'
    },
    adapter: ["xhr", "http"],
})

const register = (data: IRegister): Promise<IRegisterResponse<RegisterStatus>> => {
    console.log(data);
    return instance.post('/register', data);
}

const reSendEmail = (email: string) => {
    const data = { email };
    return instance.post('/resend-email', data);
}

const signIn = (data: ISignIn) : Promise<AxiosResponse>=> {
    console.log(data);
    return instance.post('/login', data);
}

export { register, reSendEmail, signIn };
