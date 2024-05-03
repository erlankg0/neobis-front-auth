import styles from './email.module.css';
import {useState} from "react";
import Prev from "../prev/prev.tsx";
import Modal from "../modal/modal.tsx";
import {useAppSelector} from "../../redux/hooks.ts";
import {reSendEmail} from "../../API/network.ts";

const Email = () => {
    const [active, setActive] = useState<boolean>(false)
    const email = useAppSelector(state => state.singUp.email);
    console.log(active)

    const handleOnClick = () => {
        setActive(true);
        const response = reSendEmail(email);
        console.log(response);
    }
    return (
        <div className={styles.content}>
            <Modal email={email} active={active} setActive={setActive}/>
            <Prev/>
            <div className={styles.text}>
                <h2 className={styles.title}>Выслали письмо со ссылкой для завершения регистрации на {email}</h2>
                <p className={styles.paragraph}>Если письмо не пришло, не спеши ждать совиную почту - лучше <strong>проверь
                    ящик “Спам”</strong></p>
                <p className={styles.paragraph}><strong>(´｡• ω •｡`)</strong></p>
                <p className={styles.email} onClick={handleOnClick}>Письмо не пришло</p>
            </div>
        </div>
    )
}

export default Email