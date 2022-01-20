import { IcontentBlock, ItopArtistsItems } from 'Interface/Interfaces';
import React from 'react';

export enum Etype {
    TOP_ARTISTS = "top_artists"
}

export default function ContentBlock({ title, data, type }: IcontentBlock) {
    console.log(data);

    return (
        <div className='contentBlock'>
            <div className='home__title'>{title}</div>
            <div className='home__content'>
                {
                    type === Etype.TOP_ARTISTS && data &&
                    <div className='topArtists'>
                        {data?.items?.map((item: ItopArtistsItems, i: any) => {
                            return (
                                <div key={i} className='topArtists__group'>
                                    <img src={item?.images[0]?.url} />
                                    <div className='topArtists__info'>
                                        <span>{item?.name}</span>
                                        {item.genres.length > 0 && item.genres &&
                                            <div className='topArtists_genres'>
                                                {item.genres.map((genre: any, i: any) => {
                                                    if (i === item?.genres?.length - 1 && i > 0) {
                                                        return <span key={i} style={{marginLeft:4}} className='topArtists_genre'>{genre}</span>
                                                    }
                                                    else{
                                                        return <span key={i} className='topArtists_genre'>{genre}</span>
                                                    }
                                                })}
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}
