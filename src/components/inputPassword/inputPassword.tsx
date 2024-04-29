import React, { useState } from 'react';
import { IInput } from './../input/interface.ts';
import styles from './inputPassword.module.css';
import visible from './../../assets/icon/visible.svg';
import unvisible from './../../assets/icon/unvisible.svg';

const InputPassword: React.FC<IInput> = ({ name, placeholder }) => {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.content}>
            <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                name={name}
                placeholder={placeholder}
            />
            <div className={styles.toggleButton} onClick={togglePasswordVisibility}>
                {showPassword ? (
                    <img src={unvisible} alt="Hide Password" />
                ) : (
                    <img src={visible} alt="Show Password" />
                )}
            </div>
        </div>
    );
};

export default InputPassword;
