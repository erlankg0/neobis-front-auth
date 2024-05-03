import React, {useState} from 'react';
import {IInput} from './../input/interface.ts';
import styles from './inputPassword.module.css';
import visible from './../../assets/icon/visible.svg';
import unvisible from './../../assets/icon/unvisible.svg';

const InputPassword: React.FC<IInput> = ({value, placeholder, onChange}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [border, setBorder] = useState<boolean>()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleOnClick = () => {
        setBorder(true);
    }

    const handleOnBlur = () => {
        setBorder(false);
    }

    return (
        <div className={border ? `${styles.content} ${styles.border}` : styles.content}>
            <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                onClick={handleOnClick}
                onBlur={handleOnBlur}
                placeholder={placeholder}
                required
            />
            <div className={styles.toggleButton} onClick={togglePasswordVisibility}>
                {showPassword ? (
                    <img src={unvisible} alt="Hide Password"/>
                ) : (
                    <img src={visible} alt="Show Password"/>
                )}
            </div>
        </div>
    );
};

export default InputPassword;
