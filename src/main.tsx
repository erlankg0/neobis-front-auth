import ReactDOM from 'react-dom/client'
import App from './layout/App/App.tsx'
import './index.css'
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <App/>
    </HashRouter>
)