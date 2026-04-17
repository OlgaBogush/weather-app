import { WeatherResponseSchema } from "./schemas/weatherSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`
  )
  const data = await response.json()

  return WeatherResponseSchema.parse(data)
}
