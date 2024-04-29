import ReactDOM from 'react-dom/client'
import App from './layout/App/App.tsx'
import './index.css'
import {HashRouter} from "react-router-dom";
import store from "./redux/store.ts";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
)