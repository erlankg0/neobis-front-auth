import styles from "./main.module.css";
import Intro from "../../components/intro/intro.tsx";
import Registration from "../Registration/Registration.tsx";

const Main = () => {
    return (
        <main>
            <div className={'container'}>
                <div className={styles.content}>
                    <Intro/>
                    <Registration/>
                </div>
            </div>
        </main>
    )
}

export default Main;