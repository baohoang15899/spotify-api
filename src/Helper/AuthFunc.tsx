import { getMe } from "Api/Axios"
import { ItokenData } from "Interface/Interfaces"
import { authAction } from "Redux/AuthReducer"


export const getAccessToken = () => {
    // const access_token = new URLSearchParams(window.location.hash).get('#access_token')
    // const expires_in = new URLSearchParams(window.location.hash).get('expires_in')
    // const token_type = new URLSearchParams(window.location.hash).get('token_type')
    // const tokenData = {
    //     access_token: access_token,
    //     expires_in: expires_in,
    //     token_type: token_type
    // }
    // if (access_token) {
    //     localStorage.setItem('token_data', JSON.stringify(tokenData))
    // }

    // const token: any = localStorage.getItem('token_data')
    // if (token !== null) {
    //     const data: ItokenData = JSON.parse(token)
    //     dispatch(authAction.getUserRequest({code:data}))
    // }
    // else {
    //     localStorage.removeItem('token_data')
    // }
}