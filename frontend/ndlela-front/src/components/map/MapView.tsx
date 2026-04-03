"use client"

import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function MapView() {
    return (
        <div className="w-full h-[500px]">
            <MapContainer
            center={[-25.965, 32.583]}
            zoom={13}
            className="w-full h-full">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
        </div>
    )
}