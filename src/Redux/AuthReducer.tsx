import { createSlice } from '@reduxjs/toolkit'
import { IinitAuthState } from 'Interface/Interfaces'

const initState: IinitAuthState = {
    Loading:false,
    user: {
        country: '',
        display_name: '',
        email: '',
        explicit_content: {
            filter_enabled:false,
            filter_locked:false,
        },
        external_urls: {
            spotify: ''
        },
        followers: {
            href: '',
            total: 0
        },
        href: '',
        id: '',
        images: [],
        product: '',
        type: '',
        uri: '',
        status:false
    }
}

export const counterSlice = createSlice({
    name: 'Auth',
    initialState: initState,
    reducers: {
        startLoading:(state) =>{
            state.Loading = true
        },
        getUserRequest: () => { },
        getUserSuccess: (state, {payload}) => {
            state.user = payload
        },
        stopLoading:(state) =>{
            state.Loading = false
        },
        logOutRequest:() =>{},
        LogOutSuccess:(state) =>{
            state.user = {status:false}
        }
    },
})


export const authAction = counterSlice.actions
export default counterSlice.reducer