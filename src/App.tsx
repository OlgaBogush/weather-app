import type { FC } from "react"
import HourlyForecast from "./components/cards/HourlyForecast"
import DailyForecast from "./components/cards/DailyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"

const App: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  )
}

export default App
