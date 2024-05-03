import {useSearchParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useAddDispatch} from "../../redux/hooks.ts";
import {loginSuccess} from "../../redux/reducer/auth.ts";
import Login from "../Login/Login.tsx";

interface IConfirmed {
    setSuccess: (success: boolean) => void;
}

const Confirmed: React.FC<IConfirmed> = ({setSuccess}) => {
    const [searchParams] = useSearchParams();

    const token = searchParams.get('token') // dsajklsadkfjhsdjk
    const dispatch = useAddDispatch();

    useEffect(() => {
        if (token) {
            dispatch(loginSuccess({accessToken: token, refreshToken: null, username: null}))
        }
        console.log(token)
    }, [])
    return <Login setSuccess={setSuccess}/>
}

export default Confirmed;