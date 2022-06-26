import React from 'react';
import s from './Favourites.module.css';
import {FilmCard} from '../filmCard/FilmCard';
import {FilmsStateType} from '../../state/description-reducer';

type FavouritesType = {
    films: FilmsStateType[]
}

export const Favourites = React.memo((props: FavouritesType) => {

    const favouriteFilms = props.films.filter(f => f.favourite)

    return (
        <div className={s.favourites}>
            Favourites
            <div>
                <span>Rating</span>
            </div>
            {favouriteFilms.map(f => <FilmCard films={f}/>)}
        </div>
    )
})
