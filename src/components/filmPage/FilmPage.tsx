import React from 'react';
import './FilmPage.css';
import {FilmCard} from '../filmCard/FilmCard';
import {FilmsStateType} from '../../state/films-reducer';

type FilmPageType = {
    films: FilmsStateType[]
}

export const FilmPage = React.memo((props: FilmPageType) => {
    return (
        <div className="filmPage">
            {/*<FilmCard films={props.films}/>*/}
            video
            comments
        </div>
    );
})