import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
import s from './FilmCard.module.css'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookIcon from '@material-ui/icons/Book'
import {Box, Icon, Paper} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {addToFavouriteAC, FilmsStateType} from '../../state/description-reducer'
import {useDispatch} from 'react-redux'
import {Rating} from '@material-ui/lab'

type FilmCardType = {
    films: FilmsStateType
}

export const FilmCard = React.memo((props: FilmCardType) => {

    const [value, setValue] = useState<number | null>(props.films.stars)

    useEffect(() => {
        setValue(props.films.stars)
    }, [props])

    const onChangeRating = (e: ChangeEvent<{}>, newValue: number | null) => setValue(newValue)

    const dispatch = useDispatch()
    const addToFavourite = useCallback(() => dispatch(addToFavouriteAC(props.films.id, !props.films.favourite)), [dispatch, props])

    return (
        <div className={s.filmCard}>
            <Paper style={{padding: '20px'}}>
                <div className={s.filmName}>
                    <div>
                        <NavLink to={'/filmPage'} className={s.link}>
                            <span>{props.films.filmTitle} ({props.films.year})</span>
                        </NavLink>
                    </div>
                    <div className={s.data}>
                        <Box  borderColor="transparent">
                            <Rating
                                value={value}
                                onChange={onChangeRating}
                            />
                        </Box>
                        <div className={s.favourite} onClick={addToFavourite}>
                            {
                                props.films.favourite ? <Icon><BookIcon/></Icon> : <Icon><BookmarkIcon/></Icon>
                            }
                        </div>
                    </div>
                </div>
                <div className={s.filmAbout}>
                    <div className={s.filmImg}>
                        <NavLink to={'/filmPage'} className={s.link}>
                            <img src={props.films.filmImg} alt="filmImg"/>
                        </NavLink>
                    </div>
                    <div className={s.filmDescription}>
                        <div className={s.about}>
                            {props.films.about}
                        </div>
                        <div className={s.descriptionItem}>
                            <span>Year of issue:</span> {props.films.year}
                        </div>
                        <div className={s.descriptionItem}><span>Country:</span> {props.films.country}</div>
                        <div className={s.descriptionItem}><span>Genre:</span> {props.films.genre}</div>
                        <div className={s.descriptionItem}><span>Duration:</span> {props.films.duration}</div>
                        <div className={s.descriptionItem}><span>Premiere:</span> {props.films.premiere}</div>
                    </div>
                </div>
            </Paper>
        </div>
    );
})