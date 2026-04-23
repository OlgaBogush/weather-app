import { useState, type FC } from "react"
import Map from "./components/Map"
import CurrentWeather from "./components/cards/CurrentWeather"
import HourlyForecast from "./components/cards/HourlyForecast"
import DailyForecast from "./components/cards/DailyForecast"
import AdditionalInfo from "./components/cards/AdditionalInfo"

import type { Coords } from "./type"
import LocationDropdown from "./components/dropdowns/LocationDropdown"

const App: FC = () => {
  const [coords, setCoords] = useState<Coords>({ lat: 10, lon: 20 })

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon })
  }

  console.log(coords)

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  )
}

export default App
