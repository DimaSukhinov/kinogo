import React from 'react'
import s from './Navigation.module.css'
import {FilmsStateType} from '../../state/description-reducer'

type NavigationType = {
    films: FilmsStateType[]
    filterForFilmsByGenre: any
    setFilterForFilmsByGenre: any
    filterForFilmsByYear: any
    setFilterForFilmsByYear: any
}

export type GenreType = 'all' | 'action' | 'detective' | 'fantastic' | 'thriller'

export const Navigation = React.memo((props: NavigationType) => {

    const setFilmsByGenre = (genre: GenreType) => () => props.setFilterForFilmsByGenre(genre)
    const setFilmsByYear = (year: number | null) => () => props.setFilterForFilmsByYear(year)

    return (
        <div className={s.navigation}>
            <div><span>Navigation bar</span></div>
            <div className={s.categories}>
                <div className={s.category}>
                    <div className={s.categoryName}>
                        <span>Genres</span>
                    </div>
                    <div onClick={setFilmsByGenre('all')} style={props.filterForFilmsByGenre === 'all' ? {color: 'red'} : {}}>All</div>
                    <div onClick={setFilmsByGenre('action')} style={props.filterForFilmsByGenre === 'action' ? {color: 'red'} : {}}>Action</div>
                    <div onClick={setFilmsByGenre('detective')} style={props.filterForFilmsByGenre === 'detective' ? {color: 'red'} : {}}>Detective</div>
                    <div onClick={setFilmsByGenre('fantastic')} style={props.filterForFilmsByGenre === 'fantastic' ? {color: 'red'} : {}}>Fantastic</div>
                    <div onClick={setFilmsByGenre('thriller')} style={props.filterForFilmsByGenre === 'thriller' ? {color: 'red'} : {}}>Thriller</div>
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
