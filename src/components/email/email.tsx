import styles from './email.module.css';
import React, {useState} from "react";
import {IEmail} from "./emailInterface.ts";
import Prev from "../prev/prev.tsx";
import Modal from "../modal/modal.tsx";


const Email: React.FC<IEmail> = ({email}) => {
    const [active, setActive] = useState<boolean>(false)
    console.log(active)
    return (
        <div className={styles.content}>
            <Modal email={email} active={active} setActive={setActive}/>

            <Prev/>
            <div className={styles.text}>
                <h2 className={styles.title}>Выслали письмо со ссылкой для завершения регистрации на {email}</h2>
                <p className={styles.paragraph}>Если письмо не пришло, не спеши ждать совиную почту - лучше <strong>проверь
                    ящик “Спам”</strong></p>
                <p className={styles.paragraph}><strong>(´｡• ω •｡`)</strong></p>
                <p className={styles.email} onClick={()=> setActive(true)}>Письмо не пришло</p>
            </div>
        </div>
    )
}

export default Email