import {Field, Form, Formik} from "formik";
import Input from "../../components/input/input.tsx";
import InputPassword from "../../components/inputPassword/inputPassword.tsx";
import Button from "../../components/button/button.tsx";
import styles from "./login.module.css";
import {useAddDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setLogin, setPassword} from './../../redux/reducer/singin.ts';
import {NavLink, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {signIn} from "../../API/network.ts";
import {loginError, loginStart, loginSuccess} from "../../redux/reducer/auth.ts";

interface ILogin {
    setSuccess: (success: boolean) => void;
}

const Login: React.FC<ILogin> = ({setSuccess}) => {
    const dispatch = useAddDispatch();

    const username = useAppSelector(state => state.singIn.username);
    const password = useAppSelector(state => state.singIn.password);

    const [status, setStatus] = useState<number>();
    const [error, setError] = useState<boolean>()

    const navigate = useNavigate();


    if (status == 200) {
        navigate('/success', {replace: true});
        setSuccess(true);
    }
    useEffect(() => {
        return setSuccess(false)
    })

    const handleSetPassword = (password: string) => {
        dispatch(setPassword(password));
    }

    const handleSetLogin = (login: string) => {
        dispatch(setLogin(login));
    }

    return (
        <Formik
            initialValues={{
                login: username,
                password: password,
            }}
            onSubmit={() => {
                const data = {
                    username,
                    password,
                }
                dispatch(loginStart()); // start login

                signIn(data).then(r => {
                    dispatch(loginSuccess(r.data.accessToken));
                    setStatus(r.status);
                    setError(false);
                }).catch(e => {
                    dispatch(loginError(e.message))
                    setError(true)
                })
                setSuccess(true);
            }}
        >
            {() => (
                <div className={styles.container}>
                    {error ?
                        (<div className={styles.errorBorder}>
                            <p className={styles.errorTitle}>Неверный логин или пароль</p>
                        </div>) :
                        (<div className={styles.transparent}>
                            <p className={styles.transparent}>Неверный логин или пароль</p>
                        </div>)
                    }

                    <Form className={styles.content}>
                        <h2 className={styles.title}>Вэлком бэк!</h2>
                        <div className={styles.fields}>
                            <Field
                                as={Input}
                                type={'text'}
                                value={username}
                                name={'login'}
                                placeholder={'Введи туда-сюда логин'}
                                onChange={handleSetLogin}
                            />
                            <Field
                                as={InputPassword}
                                type={'password'}
                                value={password}
                                name={'password'}
                                placeholder={'Пароль (тоже введи)'}
                                onChange={handleSetPassword}
                            />
                        </div>
                        <NavLink className={styles.forgot} to={'/forgot'}>Забыл пароль</NavLink>
                        <Button text={'Войти'}/>
                        <NavLink to={'/register'} className={styles.register}>У меня еще нет аккаунта</NavLink>
                    </Form>
                </div>

            )}
        </Formik>
    )
}

export default Login