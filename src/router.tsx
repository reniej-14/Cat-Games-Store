import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Carrito from "./views/Carrito"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </BrowserRouter>
    )
}
