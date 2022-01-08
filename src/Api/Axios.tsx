import axios from "axios";
import { Iresponse } from "Interface/Interfaces";
import NAxios from "./ConfigAxios";
import { Url } from "./Urls";


const processRequest = async (url: any) => {
    try {
        const data:Iresponse = await url
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getMe = async () => {
    return processRequest(NAxios.get(`${Url.GET_ME}`))
}