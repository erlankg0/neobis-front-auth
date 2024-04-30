import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login.tsx";
import Intro from "../../components/intro/intro.tsx";
import Registration from "../Registration/Registration.tsx";
import styles from './app.module.css'
import Email from "../../components/email/email.tsx";

function App() {
    return (
        <main>
            <div className={'container'}>
                <div className={styles.content}>
                    <Intro/>
                    <Routes>
                        <Route path={'/'} element={<Login/>}/>
                        <Route path={'/register'} element={<Registration/>}/>
                        <Route path={'/email'} element={<Email email={'era.ab.02@gmail.com'}/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default App
