import { useSuspenseQuery } from "@tanstack/react-query"
import Card from "./Card"
import { getWeather } from "../../api"
import WeatherIcon from "../WeatherIcon"

type Props = {}

function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 33, lon: -94 }),
  })

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.daily.map((item) => (
        <div key={item.dt} className="flex justify-between">
          <p className="w-9">
            {new Date(item.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <WeatherIcon source={item.weather[0].icon} />
          <p>{Math.round(item.temp.day)}°C</p>
          <p className="text-gray-500/75">{Math.round(item.temp.min)}°C</p>
          <p className="text-gray-500/75">{Math.round(item.temp.max)}°C</p>
        </div>
      ))}
    </Card>
  )
}

export default DailyForecast
