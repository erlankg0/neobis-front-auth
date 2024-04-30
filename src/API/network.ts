import axios from "axios";
import {IRegister, IRegisterResponse, RegisterStatus} from "./register.ts";

const instance = axios.create({
    baseURL: 'https://reliable-courage-neoauth.up.railway.app/api/auth', // Исправленный URL
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json'
    },
    adapter: ["xhr", "http"],
})


const register = (data: IRegister): Promise<IRegisterResponse<RegisterStatus>> => {
    console.log(data)
    return instance.post('/register', data)
}

const reSendEmail = (email: string) => {
    const data = {
        email
    }
    return instance.post('/resend-email', data)
}

const singIn = (login: string, password: string) => {
    const data = {
        login,
        password,
    }

    return instance.post('/login', data)
}
export {register, reSendEmail, singIn};