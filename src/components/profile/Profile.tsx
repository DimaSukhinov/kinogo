import React from 'react';
import s from './Profile.module.css';

export const Profile = React.memo(() => {
    return (
        <div className={s.profile}>
            Profile
        </div>
    );
})