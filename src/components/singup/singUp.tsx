import Prev from "../prev/prev.tsx";
import styles from './singup.module.css'
import {Field, Form, Formik} from "formik";
import Input from "../input/input.tsx";
import InputPassword from "../inputPassword/inputPassword.tsx";
import Button from "../button/button.tsx";
import React, {useState} from "react";
import {ISingUp, IValid} from "./singup.ts";
import {useNavigate} from "react-router-dom";
import {register} from "../../API/network.ts";

const SingUp: React.FC<ISingUp> = ({
                                       email,
                                       username,
                                       password,
                                       confirmPassword,
                                       handleSetConfirmPassword,
                                       handleSetPassword,
                                       handleSetEmail,
                                       handleSetUserName,
                                       validatePassword,
                                   }) => {
    const [passwordValid, setPasswordValid] = useState<IValid>({
        validLength: false,
        hasLowercase: false,
        hasNumber: false,
        hasSpecialChar: false,
        hasUppercase: false
    });
    const [status, setStatus] = useState<number>();
    const navigate = useNavigate();
    if (status == 201) {
        navigate('/email')
    }

    return (
        <section className={styles.content}>
            <Prev/>
            <Formik
                initialValues={{
                    email: email,
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                }}

                onSubmit={values => {
                    if (!(values.password == values.confirmPassword)) {
                        alert('Па')
                    }
                    const data = {
                        email: email,
                        username: username,
                        password: password,
                        confirmPassword: confirmPassword
                    }

                    register(data).then((response) => setStatus(response.status)).catch((e) => console.log(e));
                }}
            >
                {() => (
                    <Form className={styles.form} onChange={() => {
                        setPasswordValid(validatePassword(password));
                    }}>
                        <h2 className={styles.title}>Создать аккаунт Lorby</h2>
                        <Field as={Input} type={'email'} value={email} onChange={handleSetEmail} name={'email'}
                               placeholder="Email"/>
                        <Field as={Input} type={'text'} value={username} onChange={handleSetUserName} name={'username'}
                               placeholder="Login"/>
                        <Field as={InputPassword} type={'password'} value={password} onChange={handleSetPassword}
                               name={'password'} placeholder="Password"/>
                        <Field as={InputPassword} type={'password'} value={confirmPassword}
                               onChange={handleSetConfirmPassword} name={'confirmPassword'}
                               placeholder="Confirm Password"
                        />
                        {password ? (
                            <ul className={styles.validationList}>
                                <li className={styles.validationItem}
                                    style={{color: passwordValid.validLength ? 'green' : 'red'}}>
                                    От 8 до 15 символов {passwordValid.validLength ? '✅' : '❌'}
                                </li>
                                <li className={styles.validationItem}
                                    style={{color: passwordValid.hasUppercase && passwordValid.hasLowercase ? 'green' : 'red'}}>
                                    Строчные и прописные
                                    буквы {passwordValid.hasUppercase && passwordValid.hasLowercase ? '✅' : '❌'}
                                </li>
                                <li className={styles.validationItem}
                                    style={{color: passwordValid.hasNumber ? 'green' : 'red'}}>
                                    Минимум 1 цифра {passwordValid.hasNumber ? '✅' : '❌'}
                                </li>
                                <li className={styles.validationItem}
                                    style={{color: passwordValid.hasSpecialChar ? 'green' : 'red'}}>
                                    Минимум 1 спецсимвол (!, ", #, $...) {passwordValid.hasSpecialChar ? '✅' : '❌'}
                                </li>
                            </ul>
                        ) : (
                            <ul className={styles.validationList}>
                                <li className={styles.validationItem}>От 8 до 15 символов</li>
                                <li className={styles.validationItem}>Строчные и прописные буквы</li>
                                <li className={styles.validationItem}>Минимум 1 цифра</li>
                                <li className={styles.validationItem}>Минимум 1 спецсимвол (!, ", #, $...)</li>
                            </ul>
                        )}
                        <Button text={'Войти'}/>
                    </Form>
                )}
            </Formik>

        </section>
    )
}

export default SingUp