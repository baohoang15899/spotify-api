import ClickOutSide from 'Helper/ClickOutSide';
import { RootReducerModel } from 'Interface/Interfaces';
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from 'Redux/AuthReducer';

export default function HeaderAuth() {
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)
    const dispatch = useDispatch()
    const infoRef = useRef<any>(null)
    const status = ClickOutSide(infoRef)

    const handleLogOut = () => {
        dispatch(authAction.logOutRequest())
    }

    return (
        <div className='subHeader'>
            <a target="_blank" href='https://www.spotify.com/vn-vi/premium/' className='subHeader__upgrade'>
                Upgrade
            </a>
            <div ref={infoRef} className='subHeader__group'>
                <div className='subHeader__info'>
                    <img className='subHeader__avatar' src={user.images && user?.images[0]?.url} />
                    <span className='subHeader__name'>{user?.display_name ? user.display_name : 'unknown'}</span>
                </div>
                <div className={status ? 'subHeader__dropdown add' : 'subHeader__dropdown'}>
                    <span className='subHeader__dropdown-link'>Account</span>
                    <span className='subHeader__dropdown-link'>Profile</span>
                    <a className='subHeader__dropdown-link' href="" target="_blank">Upgrade to Premium</a>
                    <span className='subHeader__dropdown-link' onClick={() => handleLogOut()}> Log Out </span>
                </div>
            </div>
        </div>
    )
}
