import React, { useEffect } from 'react'
import { Url } from 'Api/Urls';
import { Ilocation, IlocationState, RootReducerModel } from 'Interface/Interfaces';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function Index() {
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)
    const location = useLocation()
    const state = location.state as IlocationState
    const token = localStorage.getItem('token_data')
    const scope = `
    ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-private user-read-email user-follow-modify user-follow-read user-library-modify user-library-read streaming 
    app-remote-control user-read-playback-position user-top-read user-read-recently-played playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public
    `
    const url = `${Url.AUTH}${Url.AUTHORIZATION}?client_id=${process.env.REACT_APP_CLIENT_KEY}&response_type=token&redirect_uri=${Url.REDIRECT_URL}&scope=${scope}`

    return (
        user.status ?
            <Navigate to={{ pathname: state?.location?.pathname ? state.location.pathname : '/home' }} />
            :
            <div className='login'>
                <p className='login__description'>We play the music. You enjoy it. Deal?</p>
                {!user.status && !token ?
                    <a className='login__btn' href={url}>Login To App</a>
                    :
                    <span className='login__btn'>Login To App</span>
                }
            </div>
    )
}
