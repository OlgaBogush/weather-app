import type { FC } from "react"
import Card from "./components/cards/Card"
import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import HourlyForecast from "./components/cards/HourlyForecast"
import DailyForecast from "./components/cards/DailyForecast"

const App: FC = () => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 33, lon: -94 }),
  })

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">{JSON.stringify(data?.current)}</Card>
      <HourlyForecast />
      <DailyForecast />
    </div>
  )
}

export default App
