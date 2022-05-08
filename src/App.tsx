import React from 'react'
import './App.css'
import {Header} from './components/header/Header'
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Favourites} from './components/favourites/Favourites'
import {Profile} from './components/profile/Profile'
import {FilmPage} from './components/filmPage/FilmPage'
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {FilmsStateType} from './state/films-reducer';
import {Main} from './components/main/Main';
import {Navigation} from './components/navigation/Navigation';

export const App = () => {

    const films = useSelector<AppRootStateType, FilmsStateType[]>(state => state.films)

    return (
        <div className="App">
            <div className={'container'}>
                <HashRouter>
                    <Header/>
                    <div className={'page'}>
                        <Navigation/>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'/main'}/>}/>
                            <Route path={'/main'} element={<Main films={films}/>}/>
                            <Route path={'/profile'} element={<Profile/>}/>
                            <Route path={'/favourites'} element={<Favourites films={films}/>}/>
                            <Route path={'/filmPage'} element={<FilmPage films={films}/>}/>
                            {/*<Route path={'/*'} element={<Error404/>}/>*/}
                        </Routes>
                    </div>
                </HashRouter>
            </div>
        </div>
    )
}