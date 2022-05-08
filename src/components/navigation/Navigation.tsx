import React, {useCallback} from 'react'
import s from './Navigation.module.css'
import {FilmsStateType, filterFilmsAC} from '../../state/films-reducer'
import {useDispatch} from 'react-redux';
import {Button} from '@material-ui/core';

type NavigationType = {
    films: FilmsStateType[]
    filterForFilms: any
}

export type GenreType = 'all' | 'action' | 'detective' | 'fantastic' | 'thriller'

export const Navigation = React.memo((props: NavigationType) => {

    // const dispatch = useDispatch()
    //
    // const filterForFilms = useCallback((genre: GenreType) => dispatch(filterFilmsAC(genre)), [dispatch])

    const actionFilms = () => props.filterForFilms('action')

    return (
        <div className={s.navigation}>
            <div><span>Navigation bar</span></div>
            <div className={s.categories}>
                <div className={s.category}>
                    <div className={s.categoryName}>
                        <span>Genres</span>
                    </div>
                    <div onClick={actionFilms}>Action</div>
                    <div>Detective</div>
                    <div>Fantastic</div>
                    <div>Thriller</div>
                </div>
                <div className={s.category}>
                    <div className={s.categoryName}>
                        <span>By year</span>
                    </div>
                    <div>2008</div>
                    <div>2013</div>
                    <div>2020</div>
                    <div>2022</div>
                </div>
            </div>
        </div>
    )
})