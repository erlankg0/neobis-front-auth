import styles from './modal.module.css';
import React from "react";
import {IModal} from "./modalInterface.ts";
import './modal.module.css'
import Button from "../button/button.tsx";
import {reSendEmail} from "../../API/network.ts";

const Modal: React.FC<IModal> = ({active, setActive, email}) => {
    return (
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
            <div
                className={styles.content}
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
                <h2 className={styles.title}>Мы выслали еще одно письмо на указанную тобой почту {email}</h2>
                <p className={styles.paragraph}>Не забудь проверить
                    ящик “Спам”!11!!!!</p>
                <Button onClick={() => {
                    setActive(false)
                    reSendEmail(email).then(r => console.log(r))
                }} text={'Понятно!!1!'}/>
            </div>
        </div>
    )
}

export default Modal