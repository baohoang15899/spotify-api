import { getMeTopArtists } from 'Api/Axios'
import logOut from 'Helper/Logout'
import { ItopArtists } from 'Interface/Interfaces'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authAction } from 'Redux/AuthReducer'
import ContentBlock,{Etype} from 'components/ContentBlock';




export default function Home() {
    const [artists, setArtists] = useState<ItopArtists>()
    const dispatch = useDispatch()

    useEffect(() => {
        getArtists()
    }, [])

    const getArtists = async () => {
        const data = await getMeTopArtists()
        if (data?.data) {
            setArtists(data.data)
        }
    }



    return (
        <div className='home'>
            <div className="container">
                <ContentBlock type={Etype.TOP_ARTISTS} title={"Your Top Artists"} data={artists}/>
            </div>
        </div>
    )
}
