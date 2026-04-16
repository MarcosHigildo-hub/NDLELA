export type StopRole = "terminal" | "major" | "minor"

export type RouteStop = {
    stopId: string
    order: number
    role?: StopRole
}

export type Route = {
    id: string
    name: string

    stops: RouteStop[]

    description?: string
}