import styles from "./main.module.css";
import Intro from "../../components/intro/intro.tsx";
import SingUp from "../../components/singup/singUp.tsx";

const Main = () => {
    return (
        <main>
            <div className={'container'}>
                <div className={styles.content}>
                    <Intro/>
                    <SingUp/>
                </div>
            </div>
        </main>
    )
}

export default Main;