import {IButton} from "./interface.ts";
import React from "react";
import styles from './button.module.css'

const Button: React.FC<IButton> = ({text, disabled, onClick}) => {
    return (
        <button className={styles.button} onClick={() => onClick()} type={'submit'} disabled={disabled}>{text}</button>
    )
}

export default Button