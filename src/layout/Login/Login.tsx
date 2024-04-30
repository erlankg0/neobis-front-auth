import {Formik, Form, Field} from "formik";
import Input from "../../components/input/input.tsx";
import InputPassword from "../../components/inputPassword/inputPassword.tsx";
import Button from "../../components/button/button.tsx";
import styles from "./login.module.css";
import {useAddDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setPassword, setLogin} from './../../redux/reducer/singin.ts';
import {NavLink} from "react-router-dom";

const Login = () => {
    const dispatch = useAddDispatch();
    const login = useAppSelector(state => state.singIn.login);
    const password = useAppSelector(state => state.singIn.password);


    const handleSetPassword = (password: string) => {
        dispatch(setPassword(password));
    }

    const handleSetLogin = (login: string) => {
        dispatch(setLogin(login));
    }


    return (
        <Formik
            initialValues={{
                login: login,
                password: password,
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {() => (
                <Form className={styles.content}>
                    <h2 className={styles.title}>Вэлком бэк!</h2>
                    <div className={styles.fields}>
                        <Field
                            as={Input}
                            type={'text'}
                            value={login}
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
                    <Button disabled={false} text={'Войти'}/>
                    <NavLink to={'/register'} className={styles.register}>У меня еще нет аккаунта</NavLink>
                </Form>
            )}
        </Formik>
    )
}

export default Login