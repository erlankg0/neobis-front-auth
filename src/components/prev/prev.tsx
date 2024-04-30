import prev from './../../assets/icon/prev.svg'
import styles from "./prev.module.css";
import {useNavigate} from "react-router-dom";

const Prev = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.content} onClick={() => navigate(-1)}>
            <div className={styles.prev}>
                <img className={styles.img} src={prev} alt={'prevision'}/>
            </div>
            <p className={styles.text}>Назад</p>
        </div>
    )
}

export default Prev;