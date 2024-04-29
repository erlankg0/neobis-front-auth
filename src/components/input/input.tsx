import React from 'react'
import {IInput} from "./interface.ts";
import styles from './input.module.css';

const Input: React.FC<IInput> = ({type, value, name, onChange, placeholder}) => {
    return (
        <input className={styles.input} type={type} value={value} onChange={onChange} name={name} placeholder={placeholder}/>
    )
}

export default Input;