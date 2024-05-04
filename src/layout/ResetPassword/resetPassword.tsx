import React, {useEffect, useState, useCallback, useMemo} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import Prev from "../../components/prev/prev.tsx";
import InputPassword from "../../components/inputPassword/inputPassword.tsx";
import Button from "../../components/button/button.tsx";
import {useAppSelector, useAddDispatch} from "../../redux/hooks.ts";
import {setPassword, setConfirmPassword} from "../../redux/reducer/singup.ts";
import {IValid} from "../../components/singup/singup.ts";
import styles from "./resetPassword.module.css"
import {resetPassword} from "../../API/network.ts";
import {toast, ToastContainer} from "react-toastify";

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 15;

const ResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState<string | null>(null);
    const dispatch = useAddDispatch();

    const password = useAppSelector(state => state.singUp.password);
    const confirmPassword = useAppSelector(state => state.singUp.confirmPassword);

    const validatePassword = useCallback((password: string): IValid => {
        return {
            validLength: password.length >= MIN_PASSWORD_LENGTH && password.length <= MAX_PASSWORD_LENGTH,
            containsLetter: /^(?=.*[a-z])(?=.*[A-Z])/.test(password),
            containsNumber: /\d/.test(password),
            containsSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };
    }, []);

    useEffect(() => {
        const tokenParams = searchParams.get('token');
        if (tokenParams) {
            setToken(tokenParams);
        } else {
            navigate('/')
        }
    }, [searchParams]);

    const handleSuccessToasty = (message: string) => {
        toast(<p>{message}</p>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "success"
        })
    }

    const handleErrorToasty = (message: string) => {
        toast(<p>{message}</p>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "error"
        })
    }

    const handleOnSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (token) {
            resetPassword(token, password, confirmPassword)
                .then(r => {
                    if (r.data == "Password has been changed successfully") {
                        handleSuccessToasty('Успешно!1!!');
                        setTimeout(() => {
                            navigate('/');
                        }, 2000)

                    }
                })
                .catch(() => {
                    handleErrorToasty('Ошибка');
                });
        }
    }, [password, confirmPassword]);

    const handleSetPassword = useCallback((password: string) => {
        dispatch(setPassword(password));
    }, [dispatch]);

    const handleSetConfirmPassword = useCallback((confirmPassword: string) => {
        dispatch(setConfirmPassword(confirmPassword));
    }, [dispatch]);


    return (
        <div className={styles.content}>
            <Prev/>
            <form onSubmit={handleOnSubmit} className={styles.form}>
                <p className={styles.title}>Восстановления Пароля!!1!</p>
                <InputPassword name={'password'} placeholder={'Туда сюда пароль'} type={'password'} value={password}
                               onChange={handleSetPassword}/>
                <InputPassword name={'confirmPassword'} placeholder={'Туды сюды'} type={'password'}
                               value={confirmPassword} onChange={handleSetConfirmPassword}/>
                <ValidationList password={password} validatePassword={validatePassword}/>
                <Button text={'Восставления пароля'}/>
            </form>
            <ToastContainer/>
        </div>
    )
}

const ValidationList = ({password, validatePassword}: {
    password: string,
    validatePassword: (password: string) => IValid
}) => {
    const passwordValid = useMemo(() => validatePassword(password), [password, validatePassword]);

    return (
        <ul className={styles.validationList}>
            <li className={styles.validationItem} style={{color: passwordValid.validLength ? 'green' : 'red'}}>
                От {MIN_PASSWORD_LENGTH} до {MAX_PASSWORD_LENGTH} символов {passwordValid.validLength ? '✅' : '❌'}
            </li>
            <li className={styles.validationItem} style={{color: passwordValid.containsLetter ? 'green' : 'red'}}>
                Строчные и прописные буквы {passwordValid.containsLetter ? '✅' : '❌'}
            </li>
            <li className={styles.validationItem} style={{color: passwordValid.containsNumber ? 'green' : 'red'}}>
                Минимум 1 цифра {passwordValid.containsNumber ? '✅' : '❌'}
            </li>
            <li className={styles.validationItem} style={{color: passwordValid.containsSymbol ? 'green' : 'red'}}>
                Минимум 1 спецсимвол (!, ", #, $...) {passwordValid.containsSymbol ? '✅' : '❌'}
            </li>
        </ul>
    );
};

export default ResetPassword;
