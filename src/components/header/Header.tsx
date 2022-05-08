import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

export const Header = React.memo(() => {
    console.log('header')
    return (
        <div className="header">
            <div className={'logo'}>
                <NavLink to={'/main'} className={'link'}>kinogo</NavLink>
            </div>
            <div className={'links'}>
                <NavLink to={'/profile'} className={'link'}>profile</NavLink>
                <NavLink to={'/favourites'} className={'link'}>favourites</NavLink>
            </div>
        </div>
    );
})