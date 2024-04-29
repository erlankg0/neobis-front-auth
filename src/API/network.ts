import axios from "axios";
import {IRegister, IRegisterResponse, RegisterStatus} from "./register.ts";

const instance = axios.create({
    baseURL: 'https://reliable-courage-neoauth.up.railway.app/api/auth', // Исправленный URL
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json'
    }
})



const register = (data: IRegister): Promise<IRegisterResponse<RegisterStatus>> => {
    return instance.post('/register', data)
}

export {register};