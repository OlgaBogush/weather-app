import z from "zod"

const CitySchema = z.object({
  name: z.string(),
  local_names: z.record(z.string(), z.string()).optional(),
  lat: z.number(),
  lon: z.number(),
  country: z.string().length(2),
})

export const GeocodeSchema = z.array(CitySchema)
