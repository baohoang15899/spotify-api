import { RootReducerModel } from 'Interface/Interfaces'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className='fakeHeader'></div>
            <div className='header'>
                <div className='header__nav'>
                    <Link to={'/home'}>
                        Home
                    </Link>
                </div>
            </div>
        </>
    )
}
