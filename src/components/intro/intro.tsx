import styles from "./intro.module.css";
import people from "../../assets/image/people.svg";

const Intro = () => {
    return (
        <div className={styles.left}>
            <img src={people} alt={'People'} className={styles.image}/>
            <div className={styles.text}>
                <h1 className={styles.title}>Lorby</h1>
                <p className={styles.paragraph}>Твой личный репетитор</p>
            </div>
        </div>
    )
}

export default Intro