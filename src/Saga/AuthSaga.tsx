import { getMe } from 'Api/Axios'
import { Iresponse } from 'Interface/Interfaces'
import { takeLatest, call, put } from 'redux-saga/effects'
import { authAction } from '../Redux/AuthReducer'

function* getUserData() {
    yield put(authAction.startLoading())
    try {
        const data: Iresponse = yield call(getMe)
        if (data.status === 200) {
            yield put(authAction.getUserSuccess({ ...data.data, status: true }))
        }
    } catch (error) {
        yield put(authAction.getUserSuccess({ status: false }))
    }
    finally {
        yield put(authAction.stopLoading())
    }
}

function* logout() {
    try {
        const token = localStorage.getItem('token_data')
        if (token !== null) {
            localStorage.removeItem('token_data')
            yield put(authAction.LogOutSuccess())
        }
    } catch (error) {
        console.log(error);
    }
}

function* authSaga() {
    yield takeLatest(authAction.getUserRequest, getUserData)
    yield takeLatest(authAction.logOutRequest, logout)
}

export default authSaga