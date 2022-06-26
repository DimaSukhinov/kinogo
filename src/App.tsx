import React from 'react'
import s from './App.module.css'
import {Header} from './components/header/Header'
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './state/store'
import {FilmsStateType} from './state/description-reducer'
import {Main} from './components/main/Main'
import {Favourites} from './components/favourites/Favourites'

export const App = () => {

    const films = useSelector<AppRootStateType, FilmsStateType[]>(state => state.films)

    return (
        <div className={s.App}>
            <div className={s.container}>
                <HashRouter>
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/main'}/>}/>
                        <Route path={'/main'} element={<Main films={films}/>}/>
                        {/*<Route path={'/profile'} element={<Profile/>}/>*/}
                        <Route path={'/favourites'} element={<Favourites films={films}/>}/>
                        {/*<Route path={'/*'} element={<Error404/>}/>*/}
                    </Routes>
                </HashRouter>
            </div>
        </div>
    )
}
