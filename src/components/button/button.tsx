import {IButton} from "./interface.ts";
import React from "react";
import styles from './button.module.css'

const Button: React.FC<IButton> = ({text, disabled}) => {
    return (
        <button className={styles.button} type={'submit'} disabled={disabled}>{text}</button>
    )
}

export default Button