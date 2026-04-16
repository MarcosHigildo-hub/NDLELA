export type Coordinates = {
    lat: number
    lng: number
}

export type Stop = {
    id: string
    name: string
    coordinates: Coordinates

    isOfficial: boolean

    description?: string
    aliases?: string[]
    landmark?: string
}