import React, {useCallback} from 'react';
import './FilmCard.css';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookIcon from '@material-ui/icons/Book';
import {Icon, Paper} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {addToFavouriteAC, FilmsStateType} from '../../state/films-reducer'
import {useDispatch} from 'react-redux';

type FilmCardType = {
    films: FilmsStateType
}

export const FilmCard = React.memo((props: FilmCardType) => {

    const dispatch = useDispatch()

    const addToFavourite = useCallback(() => dispatch(addToFavouriteAC(props.films.id, !props.films.favourite)), [dispatch, props])

    return (
        <div className="filmCard">
            <Paper style={{padding: '20px'}}>
                <div className={'filmName'}>
                    <div>
                        <NavLink to={'/filmPage'} className={'link'}>
                            <span>{props.films.filmTitle} ({props.films.year})</span>
                        </NavLink>
                    </div>
                    <div onClick={addToFavourite}>
                        {
                            props.films.favourite ? <Icon><BookIcon/></Icon> : <Icon><BookmarkIcon/></Icon>
                        }
                    </div>
                </div>
                <div className={'filmAbout'}>
                    <div className={'filmImg'}>
                        <NavLink to={'/filmPage'} className={'link'}>
                            <img src={props.films.filmImg} alt="filmImg"/>
                        </NavLink>
                    </div>
                    <div className={'filmDescription'}>
                        <div className={'about'}>
                            {props.films.about}
                        </div>
                        <div className={'descriptionItem'}>
                            <span>Year of issue:</span> {props.films.year}
                        </div>
                        <div className={'descriptionItem'}><span>Country:</span> {props.films.country}</div>
                        <div className={'descriptionItem'}><span>Genre:</span> {props.films.genre}</div>
                        <div className={'descriptionItem'}><span>Duration:</span> {props.films.duration}</div>
                        <div className={'descriptionItem'}><span>Premiere:</span> {props.films.premiere}</div>
                    </div>
                </div>
            </Paper>
        </div>
    );
})