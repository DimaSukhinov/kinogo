import React, {useState} from 'react'
import s from './Main.module.css'
import {FilmCard} from '../filmCard/FilmCard'
import {FilmsStateType} from '../../state/description-reducer'
import {GenreType, Navigation} from '../navigation/Navigation'

type MainType = {
    films: FilmsStateType[]
    allFilms: () => void
    filterFilmsByGenre: (genre: GenreType) => void
    filterFilmsByYear: (year: string) => void
    sortFilmsByRating: () => void
}

export const Main = React.memo((props: MainType) => {

    const sortByRating = () => props.sortFilmsByRating()

    return (
        <div className={s.main}>
            <div>
                <Navigation films={props.films} filterFilmsByGenre={props.filterFilmsByGenre}
                            filterFilmsByYear={props.filterFilmsByYear} allFilms={props.allFilms}/>
            </div>
            <div>
                <div className={s.sort} onClick={sortByRating}>Rating</div>
                <div>
                    {
                        props.films.map(f => <FilmCard films={f}/>)
                    }
                </div>
            </div>
        </div>
    );
})