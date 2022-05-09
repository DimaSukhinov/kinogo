import React from 'react';
import s from './Favourites.module.css';
import {FilmCard} from '../filmCard/FilmCard';
import {FilmsStateType} from '../../state/description-reducer';

type FavouritesType = {
    films: FilmsStateType[]
    allFilms: () => void
    sortFilmsByRating: () => void
}

export const Favourites = React.memo((props: FavouritesType) => {

    props.allFilms()
    const favouriteFilms = props.films.filter(f => f.favourite)

    const sortFilmsByRating = () => props.sortFilmsByRating()

    return (
        <div className={s.favourites}>
            Favourites
            <div onClick={sortFilmsByRating}>
                <span>Rating</span>
            </div>
            {
                favouriteFilms.map(f => <FilmCard films={f}/>)
            }
        </div>
    )
})