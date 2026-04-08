export type Coordinates = {
    lat: number
    lng: number
}

export type Stop = {
    id: string
    name: string
    coordinates: Coordinates
}

export type PriceSegment = {
    fromStopId: string
    toStopId: string
    price: number
}

export type Route = {
    id: string
    origin: string
    destination: string
    direction: "ida" | "volta"
    stops: Stop[]
    priceSegments: PriceSegment[]
}

