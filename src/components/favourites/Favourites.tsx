import React from 'react';
import './Favourites.css';
import {FilmCard} from '../filmCard/FilmCard';
import {FilmsStateType} from '../../state/films-reducer';

type FavouritesType = {
    films: FilmsStateType[]
}

export const Favourites = React.memo((props: FavouritesType) => {

    let favouriteFilms = props.films.filter(f => f.favourite)

    return (
        <div className="favourites">
            Favourites
            {
                favouriteFilms.map(f => <FilmCard films={f}/>)
            }
        </div>
    )
})