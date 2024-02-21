export type Team = {
    id: number,
    name: string,
    fifaCode: string,
    iso2: string,
    flag: string,
    emoji: string,
    emojiString: string
}
export type Stadium = {
    id: number,
    name: string,
    city: string,
    lat: number,
    lng: number,
    image: string
}

export type TVChannel = {
    id:number,
    name: string,
    icon: string,
    country: string,
    iso2: string,
    lang:string[]
}