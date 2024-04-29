import {useAddDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setEmail, setPassword, setUserName, setConfirmPassword} from "../../redux/reducer/singup.ts";
import SingUp from "../../components/singup/singUp.tsx";

const Registration = () => {
    const dispatch = useAddDispatch();

    const email = useAppSelector(state => state.singUp.email);
    const username = useAppSelector(state => state.singUp.username);
    const password = useAppSelector(state => state.singUp.password);
    const confirmPassword = useAppSelector(state => state.singUp.confirmPassword);


    const handleSetEmail = (email: string) => {
        dispatch(setEmail(email));
    }

    const handleSetUserName = (username: string) => {
        dispatch(setUserName(username))
    }

    const handleSetPassword = (password: string) => {
        dispatch(setPassword(password));
    }

    const handleSetConfirmPassword = (confirmPassword: string) => {
        dispatch(setConfirmPassword(confirmPassword));
    }

    return (<SingUp email={email} confirmPassword={confirmPassword} password={password} username={username}
                    handleSetEmail={handleSetEmail} handleSetPassword={handleSetPassword}
                    handleSetUserName={handleSetUserName} handleSetConfirmPassword={handleSetConfirmPassword}/>)

}

export default Registration;