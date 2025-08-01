import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import MainView from "./views/MainView";
import AnimeView from "./views/AnimeView";
import NotFound from "./views/NotFound";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <AppLayout /> }>
                    <Route path="/" element={ <MainView /> } index />
                    <Route path="/anime/:animeName" element={ <AnimeView /> } />
                </Route>

                <Route element={ <AppLayout /> }>
                    <Route path="*" element={ <NotFound /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}