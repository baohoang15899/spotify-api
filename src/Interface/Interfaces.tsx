export interface ItokenData {
    access_token: string,
    expires_in: number,
    token_type: string
}



export interface ItopArtistsItems {
    external_urls: IexternalUrls
    followers: Ifollower
    genres: Array<String>,
    href: String,
    id: String,
    images: Iimages[],
    name: String,
    popularity: Number,
    type: String,
    uri: String,
}

export interface IcontentBlock{
    title:String,
    data:any,
    type:String
}
export interface ItopArtists {
    href: string,
    items: ItopArtistsItems[],
    limit: Number,
    next: any
    offset: Number
    previous: any
    total: number
}

interface Ifollower {
    href: string,
    total: number
}

interface IexternalUrls {
    spotify: string
}

interface IexplicitContent {
    filter_enabled: boolean
    filter_locked: boolean
}

interface Iimages {
    height: any,
    url: string,
    width: any
}

export interface IinitAuthState {
    user: Iuser
    Loading: boolean
}

export interface IprivateRoute {
    children: any
    auth: boolean
}

export interface Ilocation {
    hash: string
    key: string
    pathname: string
    search: string
    state: IlocationState
}

interface IlocationStateDetail {
    pathname: string,
    search: string,
    hash: string,
    state: any,
    key: string
}

export interface IlocationState {
    location: IlocationStateDetail
}

export interface Iuser {
    country?: string
    display_name?: string
    email?: string
    explicit_content?: IexplicitContent
    external_urls?: IexternalUrls
    followers?: Ifollower
    href?: string
    id?: string
    images?: Iimages[]
    product?: string
    type?: string
    uri?: string
    status: boolean
}

export interface RootReducerModel {
    authReducer: IinitAuthState,
}

export interface Iresponse {
    data?: any,
    status?: number
}