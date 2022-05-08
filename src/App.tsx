import React, {useCallback} from 'react'
import './App.css'
import {Header} from './components/header/Header'
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import {Favourites} from './components/favourites/Favourites'
import {Profile} from './components/profile/Profile'
import {FilmPage} from './components/filmPage/FilmPage'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {FilmsStateType, filterFilmsAC} from './state/films-reducer';
import {Main} from './components/main/Main';
import {GenreType, Navigation} from './components/navigation/Navigation';

export const App = () => {

    const films = useSelector<AppRootStateType, FilmsStateType[]>(state => state.films)

    // const filteredFilms = films
    //
    // const filterForFilms = useCallback((genre: GenreType) => {
    //     let action = filteredFilms.filter(f => f.genre === genre)
    // }, [filteredFilms])

    const dispatch = useDispatch()

    const filterForFilms = useCallback((genre: GenreType) => dispatch(filterFilmsAC(genre)), [dispatch])

    return (
        <div className="App">
            <div className={'container'}>
                <HashRouter>
                    <Header/>
                    <div className={'page'}>
                        <Navigation films={films} filterForFilms={filterForFilms}/>
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