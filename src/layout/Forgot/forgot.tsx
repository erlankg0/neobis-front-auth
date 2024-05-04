import React, {useCallback, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import {useAddDispatch, useAppSelector} from "../../redux/hooks.ts";
import {clear, setEmail} from "../../redux/reducer/singup.ts";
import {forGotPassword} from "../../API/network.ts";
import Input from "../../components/input/input.tsx";
import Button from "../../components/button/button.tsx";
import Prev from "../../components/prev/prev.tsx";
import styles from "./forgot.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";

const Forgot = () => {
    const email = useAppSelector((state) => state.singUp.email);
    const dispatch = useAddDispatch();
    const navigate = useNavigate();
    const handleChangeEmail = useCallback(
        (email: string) => {
            dispatch(setEmail(email));
        },
        [dispatch]
    );

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            dispatch(clear());
            navigate(`/resetPassword?token=${token}`)
        } else {
            console.log(null)
        }
    }, [searchParams])

    const handleSuccessToast = useCallback(() => {
        toast(<p>Успешно отправлено на э потчу{email}</p>, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "success",
        });
    }, [email]);

    const handleErrorToast = useCallback(() => {
        toast(<p>Ошибка при отправлении на э почту{email}</p>, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "error",
        });
    }, [email]);

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            forGotPassword(email)
                .then(() => {
                    handleSuccessToast();
                    setTimeout(() => {
                        navigate('/');
                    }, 2000)
                })
                .catch(() => {
                    handleErrorToast();
                });
        },
        [email, handleSuccessToast, handleErrorToast]
    );

    return (
        <div className={styles.content}>
            <Prev/>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Восстановление аккаунта</h2>
                <Input
                    value={email}
                    onChange={(e) => handleChangeEmail(e)}
                    type={"email"}
                    placeholder={"Веди email хы хы"}
                    name={"email"}
                />
                <Button text={"Восстановления пароля !!1!"}></Button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Forgot;
