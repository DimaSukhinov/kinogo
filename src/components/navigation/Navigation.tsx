import React from 'react'
import s from './Navigation.module.css'

export const Navigation = React.memo(() => {
    return (
        <div className={s.navigation}>
            <div><span>Navigation bar</span></div>
            <div className={s.categories}>
                <div className={s.category}>
                    <div className={s.categoryName}>
                        <span>Genres</span>
                    </div>
                    <div>Action</div>
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