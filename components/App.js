// app.js — NOT used by Next.js App Router, shown for reference only
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/page";
import Login from "./app/login/page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;