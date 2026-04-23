import { Suspense, useState, type FC } from "react"

import Map from "./components/Map"
import CurrentWeather from "./components/cards/CurrentWeather"
import HourlyForecast from "./components/cards/HourlyForecast"
import DailyForecast from "./components/cards/DailyForecast"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import LocationDropdown from "./components/dropdowns/LocationDropdown"

import type { Coords } from "./type"
import { useQuery } from "@tanstack/react-query"
import { getGeocode } from "./api"

const App: FC = () => {
  const [coordinates, setCoords] = useState<Coords>({ lat: 50, lon: 45 })
  const [location, setLocation] = useState("Tokyo")

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  })

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon })
    setLocation("custom")
  }

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 }

  {
    if (coords.lat && coords.lon) {
      return (
        <div className="flex flex-col gap-8">
          <LocationDropdown location={location} setLocation={setLocation} />
          <Map coords={coords} onMapClick={onMapClick} />

          <Suspense>
            <CurrentWeather coords={coords} />
            <HourlyForecast coords={coords} />
            <DailyForecast coords={coords} />
            <AdditionalInfo coords={coords} />
          </Suspense>
        </div>
      )
    }
  }
}

export default App
