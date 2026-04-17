import type { FC } from "react"
import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

const App: FC = () => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  })

  return <div>{JSON.stringify(data)}</div>
}

export default App
