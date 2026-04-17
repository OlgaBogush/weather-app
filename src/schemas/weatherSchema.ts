import z from "zod"

const WeatherConditionSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
})

const CommonWeatherSchema = z.object({
  dt: z.number(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number().optional(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  weather: z.array(WeatherConditionSchema),
  rain: z.object({ "1h": z.number() }).optional(),
})

export const WeatherResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),

  current: CommonWeatherSchema.extend({
    sunrise: z.number(),
    sunset: z.number(),
  }),

  hourly: z.array(
    CommonWeatherSchema.extend({
      pop: z.number(),
    })
  ),

  daily: z.array(
    z.object({
      dt: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
      temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      feels_like: z.object({
        day: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      wind_speed: z.number(),
      wind_deg: z.number(),
      weather: z.array(WeatherConditionSchema),
      clouds: z.number(),
      pop: z.number(),
      rain: z.number().optional(),
      uvi: z.number(),
    })
  ),
})
