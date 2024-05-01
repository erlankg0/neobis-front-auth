import Input from "../../components/input/input.tsx";
import {useAddDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setEmail} from "../../redux/reducer/singup.ts";
import styles from './forgot.module.css';
import Button from "../../components/button/button.tsx";
import Prev from "../../components/prev/prev.tsx";

const Forgot = () => {
    const email = useAppSelector(state => state.singUp.email)
    const dispatch = useAddDispatch();
    const handleChangeEmail = (email: string) => {
        dispatch(setEmail(email));
    }
    return (
        <div className={styles.content}>
            <Prev/>
            <div className={styles.form}>
                <h2 className={styles.title}>Восстановление аккаунта</h2>
                <Input value={email} onChange={(e) => handleChangeEmail(e)} type={'email'}
                       placeholder={'Веди email хы хы'} name={'email'}/>
                <Button text={'Восстановления пароля !!1!'}></Button>
            </div>
        </div>
    )
}

export default Forgot;