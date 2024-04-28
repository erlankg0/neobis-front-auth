import Prev from "../prev/prev.tsx";
import styles from './singup.module.css'
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';
import {register} from "../../API/network.ts";

const SingUp = () => {

    return (
        <section className={styles.content}>
            <Prev/>
            <Formik
                initialValues={{
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
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
                    register(data).then(r => console.log(r))
                }}>
                {({errors}) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Создать аккаунт Lorby</h2>
                        <Field className={styles.input} type={'email'} name={'email'} placeholder="Email"/>
                        <Field className={styles.input} type={'text'} name={'username'} placeholder="Login"/>
                        <Field className={styles.input} type={'password'} name={'password'} placeholder="Password"/>
                        <Field className={styles.input} type={'password'} name={'confirmPassword'} placeholder="Confirm Password"/>
                        <button type={'submit'}>Submit</button>
                        {errors.email && <p>email</p>}
                    </Form>
                )}
            </Formik>

        </section>
    )
}

export default SingUp