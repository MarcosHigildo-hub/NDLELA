"use client";

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SideBar from "./SideBar";
import SearchInput from "./SearchInput";

const GREATER_MAPUTO_CENTER: [number, number] = [-25.93, 32.54];

export default function MapView() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <SideBar />

      <SearchInput />

      <MapContainer
        center={GREATER_MAPUTO_CENTER}
        zoom={12}
        zoomControl={false}
        attributionControl={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap & Carto"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}
