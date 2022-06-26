import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderType = {

}

export const Header = React.memo((props: HeaderType) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to={'/main'} className={s.link}>kinogo</NavLink>
            </div>
            <div className={s.links}>
                <NavLink to={'/profile'} className={s.link}>profile</NavLink>
                <NavLink to={'/favourites'} className={s.link}>favourites</NavLink>
            </div>
        </div>
    );
})
