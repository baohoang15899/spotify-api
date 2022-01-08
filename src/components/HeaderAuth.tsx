import { RootReducerModel } from 'Interface/Interfaces';
import React from 'react'
import { useSelector } from 'react-redux';

export default function HeaderAuth() {
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)

    return (
        <div className='subHeader'>
            <a target="_blank" href='https://www.spotify.com/vn-vi/premium/' className='subHeader__upgrade'>
                Upgrade
            </a>
            <div className='subHeader__info'>
                <img className='subHeader__avatar' src={user.images && user?.images[0]?.url} />
                <span className='subHeader__name'>{user?.display_name ? user.display_name : 'unknown'}</span>
            </div>
        </div>
    )
}
