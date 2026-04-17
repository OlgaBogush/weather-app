import { useSuspenseQuery } from "@tanstack/react-query"
import Card from "./Card"
import { getWeather } from "../../api"

type Props = {}

function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 33, lon: -94 }),
  })

  return (
    <Card title="Daily Forecast">
      <div className="flex flex-col gap-4">
        {data?.daily.map((item) => (
          <div key={item.dt} className="flex justify-between">
            <p>DATE</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default DailyForecast
