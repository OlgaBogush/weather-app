import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import WeatherIcon from "../WeatherIcon"

type Props = {}

const HourlyForecast = ({}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 33, lon: -94 }),
  })
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data.hourly.map((item) => (
        <div key={item.dt} className="flex flex-col gap-2 items-center p-2">
          <p className="whitespace-nowrap">
            {new Date(item.dt * 1000).toLocaleTimeString(undefined, {
              timeStyle: "short",
            })}
          </p>
          <WeatherIcon source={item.weather[0].icon} />
          <p>{Math.round(item.temp)}°C</p>
        </div>
      ))}
    </Card>
  )
}

export default HourlyForecast
