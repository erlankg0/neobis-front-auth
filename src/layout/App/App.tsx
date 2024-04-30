import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login.tsx";
import Intro from "../../components/intro/intro.tsx";
import Registration from "../Registration/Registration.tsx";
import styles from './app.module.css'

function App() {
    return (
        <main>
            <div className={'container'}>
                <div className={styles.content}>
                    <Intro/>
                    <Routes>
                        <Route path={'/'} element={<Login/>}/>
                        <Route path={'/register'} element={<Registration/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default App
