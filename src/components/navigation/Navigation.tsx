import React from 'react'
import s from './Navigation.module.css'
import {FilmsStateType} from '../../state/description-reducer'

type NavigationType = {
    films: FilmsStateType[]
    filterFilmsByGenre: (genre: GenreType) => void
    filterFilmsByYear: (year: string) => void
    allFilms: any
}

export type GenreType = 'all' | 'action' | 'detective' | 'fantastic' | 'thriller'

export const Navigation = React.memo((props: NavigationType) => {

    const actionFilms = () => {
        props.allFilms()
        props.filterFilmsByGenre('action')
    }
    const detectiveFilms = () => {
        props.allFilms()
        props.filterFilmsByGenre('detective')
    }
    const fantasticFilms = () => {
        props.allFilms()
        props.filterFilmsByGenre('fantastic')
    }
    const thrillerFilms = () => {
        props.allFilms()
        props.filterFilmsByGenre('thriller')
    }

    const filmsFrom2008Year = () => {
        props.allFilms()
        props.filterFilmsByYear('2008')
    }
    const filmsFrom2013Year = () => {
        props.allFilms()
        props.filterFilmsByYear('2013')
    }
    const filmsFrom2020Year = () => {
        props.allFilms()
        props.filterFilmsByYear('2020')
    }
    const filmsFrom2022Year = () => {
        props.allFilms()
        props.filterFilmsByYear('2022')
    }

    return (
        <div className={s.navigation}>
            <div><span>Navigation bar</span></div>
            <div className={s.categories}>
                <div className={s.category}>
                    <div className={s.categoryName}>
                        <span>Genres</span>
                    </div>
                    <div onClick={actionFilms}>Action</div>
                    <div onClick={detectiveFilms}>Detective</div>
                    <div onClick={fantasticFilms}>Fantastic</div>
                    <div onClick={thrillerFilms}>Thriller</div>
                </div>
                <div className={s.category}>
                    <div className={s.categoryName}>
                        <span>By year</span>
                    </div>
                    <div onClick={filmsFrom2008Year}>2008</div>
                    <div onClick={filmsFrom2013Year}>2013</div>
                    <div onClick={filmsFrom2020Year}>2020</div>
                    <div onClick={filmsFrom2022Year}>2022</div>
                </div>
            </div>
        </div>
    )
})