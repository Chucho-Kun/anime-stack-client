import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import MainView from "./views/MainView";
import NotFound from "./views/NotFound";
import AnimeView from "./views/animes/AnimeView";
import AddAnimeForm from "./views/animes/AddAnimeForm";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <AppLayout /> }>
                    <Route path="/" element={ <MainView /> } index />
                    <Route path="/anime/:animeName" element={ <AnimeView /> } />
                    <Route path="/anime/add" element={ <AddAnimeForm /> } />
                </Route>

                <Route element={ <AppLayout /> }>
                    <Route path="*" element={ <NotFound /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}