import axios, { AxiosError } from 'axios'
import { ItokenData } from 'Interface/Interfaces';
import { Url } from './Urls'

const NAxios = axios.create({
    baseURL: Url.BASE,
    timeout: 30000,
    headers: {
        'Content-type': 'application/json',
    }
})

NAxios.interceptors.request.use(function (config) {
    // console.log(`[START][${config.method} ${config.baseURL}${config.url} ]`, config)
    const token = localStorage.getItem('token_data')
    if (token !== null && config.headers) {
        const tokenData: ItokenData = JSON.parse(token)
        config.headers.Authorization = token ? `Bearer ${tokenData.access_token}` : '';
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
NAxios.interceptors.response.use(function (response) {
    // console.log(`[END][${response.config.url}]`, response)
    return response;
}, function (error) {
    console.log(error.response);
    if (error.response.data.error.status === 401  && error.response.data.error.message === 'The access token expired' || error.response.data.error.message === 'Invalid access token') {
        localStorage.removeItem('token_data')
    }
    return Promise.reject(error)
});

export default NAxios