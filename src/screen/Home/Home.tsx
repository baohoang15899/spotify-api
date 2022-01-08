import logOut from 'Helper/Logout'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authAction } from 'Redux/AuthReducer'

export default function Home() {

    const dispatch = useDispatch()

    return (
        <div>
            {/* <span>Home</span>
            <Link to={'/test'}>Test</Link>
            <span onClick={() => dispatch(authAction.logOutRequest())}>Logout</span> */}
        </div>
    )
}
