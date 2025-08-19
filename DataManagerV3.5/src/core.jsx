import { Navbar } from "./Navbar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MainPage } from "./WebPart/InputSection";

export function CoreOfWeb () {
    return (
        <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<MainPage />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}