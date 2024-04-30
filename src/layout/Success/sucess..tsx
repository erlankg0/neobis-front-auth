import Intro from "../../components/intro/intro.tsx";
import styles from './success.module.css';

const Success = () => {
    return (
        <div className={styles.content}>
            <Intro/>
            <p>Выйти</p>
        </div>
    )
}

export default Success;