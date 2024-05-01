import {useAddDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setConfirmPassword, setEmail, setPassword, setUserName} from "../../redux/reducer/singup.ts";
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



    // const validatePassword = (password: string) => {
    //     return {
    //         validLength: password.length >= 8 && password.length <= 15,
    //         hasLowercase: /[a-z]/.test(password),
    //         hasUppercase: /[A-Z]/.test(password),
    //         hasNumber: /\d/.test(password),
    //         hasSpecialChar: /[!@#$%^&*]/.test(password),
    //     };
    // };

    return (<SingUp  email={email} confirmPassword={confirmPassword} password={password} username={username}
                    handleSetEmail={handleSetEmail} handleSetPassword={handleSetPassword}
                    handleSetUserName={handleSetUserName} handleSetConfirmPassword={handleSetConfirmPassword}/>)

}

export default Registration;