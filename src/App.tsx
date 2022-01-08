import React, { useEffect } from 'react'
import Login from 'screen/Login/Index'
import { useDispatch, useSelector } from 'react-redux'
import { IlocationState, RootReducerModel } from 'Interface/Interfaces'
import { authAction } from 'Redux/AuthReducer'
import { Route, Routes, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import { PrivateRoute } from 'components/PrivateRoute'
import Home from 'screen/Home/Home'
import Test from 'screen/Home/Test'
import LoadingScreen from 'components/Loading'
import Header from 'components/Header'
import HeaderAuth from 'components/HeaderAuth'

export default function App() {
    const dispatch = useDispatch()
    const location = useLocation()
    const state = location.state as IlocationState
    const navigate = useNavigate()
    const authData = useSelector((state: RootReducerModel) => state.authReducer)
    const { user, Loading } = authData

    useEffect(() => {
        const access_token = new URLSearchParams(window.location.hash).get('#access_token')
        const expires_in = new URLSearchParams(window.location.hash).get('expires_in')
        const token_type = new URLSearchParams(window.location.hash).get('token_type')
        const tokenData = {
            access_token: access_token,
            expires_in: expires_in,
            token_type: token_type
        }
        if (access_token) {
            localStorage.setItem('token_data', JSON.stringify(tokenData))
        }

        const token: any = localStorage.getItem('token_data')
        if (token !== null) {
            dispatch(authAction.getUserRequest())
        }
        else {
            localStorage.removeItem('token_data')
        }
    }, [])

    useEffect(() => {
        if (user.status) {
            navigate(state?.location?.pathname ? state.location.pathname : '/home')
        }
    }, [user.status])



    return (
        Loading ?
            <LoadingScreen />
            :
            <div className={user.status ? `mainContent add` : 'mainContent'}>
                {user.status && <Header />}
                <div className='authContent'>
                    {user.status && <HeaderAuth/>}
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route
                            path="/home"
                            element={
                                <PrivateRoute children={<Home />} auth={user.status} />
                            }
                        />
                        <Route
                            path="/test"
                            element={
                                <PrivateRoute children={<Test />} auth={user.status} />
                            }
                        />
                    </Routes>
                </div>
            </div>
    )
}
