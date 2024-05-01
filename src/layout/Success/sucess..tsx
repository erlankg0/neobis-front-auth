import styles from './success.module.css';
import {useEffect} from "react";

interface ISuccess {
    setSuccess: (success: boolean) => void;
}

const Success: React.FC<ISuccess> = ({ setSuccess}) => {
    useEffect(() => {
        setSuccess(true)
    });
    return (
        <div className={styles.center}>
            <p className={styles.title}>Выйти</p>
        </div>
    )
}

export default Success;