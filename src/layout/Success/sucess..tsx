import styles from './success.module.css';
import {useEffect} from "react";
import {useAddDispatch} from "../../redux/hooks.ts";
import {logoutSuccess} from "../../redux/reducer/auth.ts";
import {useNavigate} from "react-router-dom";
import {setLogin, setPassword} from "../../redux/reducer/singin.ts";

interface ISuccess {
    setSuccess: (success: boolean) => void;
}

const Success: React.FC<ISuccess> = ({setSuccess}) => {
    useEffect(() => {
        setSuccess(true)
    });

    const navigate = useNavigate();
    const dispatch = useAddDispatch();

    const handleLogout = () => {
        dispatch(logoutSuccess())
        setLogin('')
        setPassword('');
        navigate('/', {replace: true})
    }

    return (
        <div className={styles.center}>
            <p className={styles.title} onClick={handleLogout}>Выйти</p>
        </div>
    )
}

export default Success;