import { forecastSchema } from "./schemas/weatherSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather() {
  const response = await fetch(
    // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`
  )
  const data = await response.json()

  return forecastSchema.parse(data)
}
