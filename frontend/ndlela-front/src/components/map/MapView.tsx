"use client";

import {
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SideBar from "./SideBar";
import SearchInput from "./SearchInput";
import { routes } from "@/src/data/routes";
import { LatLngExpression } from "leaflet";

const GREATER_MAPUTO_CENTER: [number, number] = [-25.93, 32.54];

export default function MapView() {
  const route = routes[0];

  const positions: LatLngExpression[] = route.stops.map((stop) => [
    stop.coordinates.lat,
    stop.coordinates.lng,
  ]);

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

        {/* <Polyline positions={positions}/>

        {route.stops.map((stop) => (
          <Marker
          key={stop.id}
          position={[stop.coordinates.lat, stop.coordinates.lng]}/>
        ))} */}
      </MapContainer>
    </div>
  );
}
