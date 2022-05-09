import React, {useCallback} from 'react'
import s from './App.module.css'
import {Header} from './components/header/Header'
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import {Favourites} from './components/favourites/Favourites'
import {Profile} from './components/profile/Profile'
import {FilmPage} from './components/filmPage/FilmPage'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './state/store'
import {allAC, FilmsStateType, filterByGenreAC, filterByYearAC, sortByRatingAC} from './state/description-reducer'
import {Main} from './components/main/Main'
import {GenreType} from './components/navigation/Navigation';

export const App = () => {

    const films = useSelector<AppRootStateType, FilmsStateType[]>(state => state.films)

    const dispatch = useDispatch()
    const filterFilmsByGenre = useCallback((genre: GenreType) => dispatch(filterByGenreAC(genre)), [dispatch])
    const filterFilmsByYear = useCallback((year: string) => dispatch(filterByYearAC(year)), [dispatch])
    const sortFilmsByRating = useCallback(() => dispatch(sortByRatingAC()), [dispatch])
    const allFilms = useCallback(() => dispatch(allAC()), [dispatch])

    return (
        <div className={s.App}>
            <div className={s.container}>
                <HashRouter>
                    <Header allFilms={allFilms}/>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/main'}/>}/>
                        <Route path={'/main'}
                               element={<Main films={films} filterFilmsByGenre={filterFilmsByGenre}
                                              filterFilmsByYear={filterFilmsByYear}
                                              sortFilmsByRating={sortFilmsByRating} allFilms={allFilms}/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/favourites'} element={<Favourites films={films} allFilms={allFilms}
                                                                         sortFilmsByRating={sortFilmsByRating}/>}/>
                        <Route path={'/filmPage'} element={<FilmPage films={films}/>}/>
                        {/*<Route path={'/*'} element={<Error404/>}/>*/}
                    </Routes>
                </HashRouter>
            </div>
        </div>
    )
}