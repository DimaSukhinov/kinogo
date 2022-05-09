import React from 'react';
import s from './FilmPage.module.css';
import {FilmCard} from '../filmCard/FilmCard';
import {FilmsStateType} from '../../state/description-reducer';

type FilmPageType = {
    films: FilmsStateType[]
}

export const FilmPage = React.memo((props: FilmPageType) => {
    return (
        <div className={s.filmPage}>
            {/*<FilmCard films={props.films}/>*/}
            video
            comments
        </div>
    );
})