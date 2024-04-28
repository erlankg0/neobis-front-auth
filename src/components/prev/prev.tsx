import prev from './../../assets/icon/prev.svg'
import styles from "./prev.module.css";

const Prev = () => {
    return (
        <div className={styles.content}>
            <div className={styles.prev}>
                <img className={styles.img} src={prev} alt={'prevision'}/>
            </div>
            <p className={styles.text}>Назад</p>
        </div>
    )
}

export default Prev;