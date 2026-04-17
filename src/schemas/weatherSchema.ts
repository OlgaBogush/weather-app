import z from "zod"

const weatherListItemSchema = z.object({
  dt: z.number(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    sea_level: z.number(),
    grnd_level: z.number(),
    humidity: z.number(),
    temp_kf: z.number(),
  }),
  weather: z.array(
    z.object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
  clouds: z.object({
    all: z.number(),
  }),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number().optional(),
  }),
  visibility: z.number(),
  pop: z.number(),
  rain: z
    .object({
      "3h": z.number(),
    })
    .optional(),
  snow: z
    .object({
      "3h": z.number(),
    })
    .optional(),
  sys: z.object({
    pod: z.string(),
  }),
  dt_txt: z.string(),
})

export const forecastSchema = z.object({
  cod: z.string(),
  message: z.number(),
  cnt: z.number(),
  list: z.array(weatherListItemSchema),
  city: z
    .object({
      id: z.number(),
      name: z.string(),
      coord: z.object({
        lat: z.number(),
        lon: z.number(),
      }),
      country: z.string(),
      population: z.number(),
      timezone: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
    })
    .optional(),
})
