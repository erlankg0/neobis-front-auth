import axios, {AxiosResponse} from "axios";
import {IRegister} from "./register.ts";

const instance = axios.create({
    baseURL: 'https://https//reliable-courage-neoauth.up.railway.app/api/auth',
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json'
    }
})


const register = (data: IRegister): Promise<AxiosResponse> => {
    return instance.post('/register', data)
}

export {register};