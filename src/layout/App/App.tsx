import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login.tsx";
import Intro from "../../components/intro/intro.tsx";
import Registration from "../Registration/Registration.tsx";
import styles from './app.module.css'
import Email from "../../components/email/email.tsx";
import {useState} from "react";
import Success from "../Success/sucess..tsx";
import Forgot from "../Forgot/forgot.tsx";

function App() {
    const [success, setSuccess] = useState<boolean>(false)

    return (
        <main>
            <div className={'container'}>
                <div className={success ? styles.center : styles.content}>
                    <Intro/>
                    <Routes>
                        <Route path={'/'} element={<Login setSuccess={setSuccess}/>}/>
                        <Route path={'/register'} element={<Registration/>}/>
                        <Route path={'/email'} element={<Email/>}/>
                        <Route path={'/success'} element={<Success setSuccess={setSuccess}/>}/>
                        <Route path={'/forgot'} element={<Forgot/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default App
