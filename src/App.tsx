import type { FC } from "react"
import Card from "./components/cards/Card"
import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import DailyForecast from "./components/cards/DailyForecast"

const App: FC = () => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 33, lon: -94 }),
  })

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">{JSON.stringify(data?.current)}</Card>
      <Card title="Hourly Forecast (48 Hours)">
        {JSON.stringify(data?.hourly)}
      </Card>
      <DailyForecast />
    </div>
  )
}

export default App
