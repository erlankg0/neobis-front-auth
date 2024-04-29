import Prev from "../prev/prev.tsx";
import styles from './singup.module.css'
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Input from "../input/input.tsx";
import InputPassword from "../inputPassword/inputPassword.tsx";
import Button from "../button/button.tsx";
import React from "react";
import {ISingUp} from "./singup.ts";

const SingUp: React.FC<ISingUp> = ({
                                       email,
                                       username,
                                       password,
                                       confirmPassword,
                                       handleSetConfirmPassword,
                                       handleSetPassword,
                                       handleSetEmail,
                                       handleSetUserName
                                   }) => {

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
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Э-почта').required('Объязательное поле'),
                    username: Yup.string().uppercase('Строчные и прописные буквы').lowercase('Строчные и прописные буквы'),
                    password: Yup.string().min(8, 'От 8 до 15 символов').max(15, 'От 8 до 15 символов'),
                    confirmPassword: Yup.string().min(8, 'От 8 до 15 символов').max(15, 'От 8 до 15 символов')
                })}
                onSubmit={values => {
                    const data = {
                        email: values.email,
                        username: values.username,
                        password: values.password,
                        confirmPassword: values.confirmPassword
                    }
                    console.log(JSON.stringify(data, null))
                }}
            >
                {() => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Создать аккаунт Lorby</h2>
                        <Field as={Input} type={'email'} value={email} onChange={handleSetEmail} name={'email'} placeholder="Email"/>
                        <Field as={Input} type={'text'} value={username} onChange={handleSetUserName} name={'username'} placeholder="Login"/>
                        <Field as={InputPassword} type={'password'} value={password} onChange={handleSetPassword} name={'password'} placeholder="Password"/>
                        <Field as={InputPassword} type={'password'} value={confirmPassword} onChange={handleSetConfirmPassword} name={'confirmPassword'}
                               placeholder="Confirm Password"/>
                        <ul className={styles.validationList}>
                            <li>От 8 до 15 символов</li>
                            <li>Строчные и прописные буквы</li>
                            <li>Минимум 1 цифра</li>
                            <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
                        </ul>
                        <Button text={'Войти'}/>
                    </Form>
                )}
            </Formik>

        </section>
    )
}

export default SingUp