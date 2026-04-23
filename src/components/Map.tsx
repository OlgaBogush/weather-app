import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"

import type { Coords } from "../type"

type Props = {
  coords: Coords
  onMapClick: (lat: number, lon: number) => void
}

const Map = ({ coords, onMapClick }: Props) => {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={5}
      style={{ width: "700px", height: "500px" }}
    >
      <MapClick onMapClick={onMapClick} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lon]} />
    </MapContainer>
  )
}

function MapClick({
  onMapClick,
}: {
  onMapClick: (lat: number, lon: number) => void
}) {
  const map = useMap()
  map.on("click", (e) => {
    const { lat, lng } = e.latlng
    map.panTo([lat, lng])
    onMapClick(lat, lng)
  })
  return null
}

export default Map
