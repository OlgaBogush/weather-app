import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import Card from "./Card"
import WeatherIcon from "../WeatherIcon"

type Props = {}

const CurrentWeather = ({}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 33, lon: -94 }),
  })
  return (
    <Card
      title="Current Weather"
      childrenClassName="flex flex-col items-center gap-6"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-6xl font-semibold text-center">
          {Math.round(data.current.temp)}°C
        </h2>
        <WeatherIcon
          source={data.current.weather[0].icon}
          className="size-20"
        />
        <h3 className="capitalize text-xl">
          {data.current.weather[0].description}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-center">Local Time:</p>
        <h3 className="text-4xl font-semibold">
          {new Intl.DateTimeFormat("ru", {
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(data.current.dt * 1000))}
        </h3>
      </div>

      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-2 items-center w-20">
          <p className="text-gray-500">Feels Like</p>
          <p>{Math.round(data.current.feels_like)}°C</p>
        </div>
        <div className="flex flex-col gap-2 items-center w-20">
          <p className="text-gray-500">Humidity</p>
          <p>{data.current.humidity}%</p>
        </div>
        <div className="flex flex-col gap-2 items-center w-20">
          <p className="text-gray-500">Wind</p>
          <p>{Math.round(data.current.wind_speed)} m/s</p>
        </div>
      </div>
    </Card>
  )
}

export default CurrentWeather
