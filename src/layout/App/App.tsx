import Main from "../Main/Main.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
        </Routes>
    )
}

export default App
