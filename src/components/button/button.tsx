import {IButton} from "./interface.ts";
import React from "react";
import styles from './button.module.css'

const Button: React.FC<IButton> = ({text}) => {
    return (
        <button className={styles.button} type={'submit'}>{text}</button>
    )
}

export default Button