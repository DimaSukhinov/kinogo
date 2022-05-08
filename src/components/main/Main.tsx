import React from 'react';
import './Main.css';
import {FilmCard} from '../filmCard/FilmCard';
import {FilmsStateType} from '../../state/films-reducer';

type MainType = {
    films: FilmsStateType[]
}

export const Main = React.memo((props: MainType) => {
    return (
        <div className="main">
            {
                props.films.map(f => <FilmCard films={f}/>)
            }
        </div>
    );
})