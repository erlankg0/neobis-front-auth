import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login.tsx";
import Intro from "../../components/intro/intro.tsx";
import Registration from "../Registration/Registration.tsx";
import styles from './app.module.css'
import Email from "../../components/email/email.tsx";
import {useState} from "react";
import Success from "../Success/sucess..tsx";
import Forgot from "../Forgot/forgot.tsx";
import Confirmed from "../Comfirm/comfirm.tsx";
import {useAppSelector} from "../../redux/hooks.ts";
import NotFount from "../NotFound/404.tsx";
import ResetPassword from "../ResetPassword/resetPassword.tsx";

function App() {
    const [success, setSuccess] = useState<boolean>()
    const JWT = useAppSelector(state => state.auth.authData);


    return (
        <main>
            <div className={'container'}>
                <div className={success ? styles.center : styles.content}>
                    <Intro/>
                    {JWT.accessToken ? <Success setSuccess={setSuccess}/> : <Routes>
                        <Route path={'/'} element={JWT.accessToken ? <Success setSuccess={setSuccess}/> :
                            <Login setSuccess={setSuccess}/>}/>
                        <Route path={'/forgot'} element={<Forgot/>}/>
                        <Route path={'/register'} element={<Registration/>}/>
                        <Route path={'/email'} element={<Email/>}/>
                        <Route
                            path={'/success'}
                            element={JWT.accessToken ? <Success setSuccess={setSuccess}/> :
                                <Login setSuccess={setSuccess}/>}
                        />

                        <Route path={'/confirmed'} element={<Confirmed setSuccess={setSuccess}/>}/>
                        <Route path={'/resetPassword'} element={<ResetPassword/>}/>
                        <Route element={<NotFount/>}/>
                    </Routes>}

                </div>
            </div>
        </main>
    )
}

export default App
