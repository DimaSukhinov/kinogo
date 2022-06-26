import React, {useState} from 'react'
import s from './Main.module.css'
import {FilmCard} from '../filmCard/FilmCard'
import {FilmsStateType} from '../../state/description-reducer'
import {GenreType, Navigation} from '../navigation/Navigation'

type MainType = {
    films: FilmsStateType[]
}

export const Main = React.memo((props: MainType) => {

    const [filterForFilmsByGenre, setFilterForFilmsByGenre] = useState<GenreType>('all')
    const [filterForFilmsByYear, setFilterForFilmsByYear] = useState<number | null>(null)

    let filteredFilms = props.films
    if (filterForFilmsByGenre === 'action') {
        filteredFilms = props.films.filter(f => f.genre === 'Action')
    }
    if (filterForFilmsByGenre === 'detective') {
        filteredFilms = props.films.filter(f => f.genre === 'Detective')
    }
    if (filterForFilmsByGenre === 'fantastic') {
        filteredFilms = props.films.filter(f => f.genre === 'Fantastic')
    }
    if (filterForFilmsByGenre === 'thriller') {
        filteredFilms = props.films.filter(f => f.genre === 'Thriller')
    }

    return (
        <div className={s.main}>
            <div>
                <Navigation films={props.films} filterForFilmsByGenre={filterForFilmsByGenre}
                            setFilterForFilmsByGenre={setFilterForFilmsByGenre}
                            filterForFilmsByYear={filterForFilmsByYear}
                            setFilterForFilmsByYear={setFilterForFilmsByYear}/>
            </div>
            <div>
                <div className={s.sort}>Rating</div>
                <div>
                    {filteredFilms.map(f => <FilmCard films={f}/>)}
                </div>
            </div>
        </div>
    );
})
