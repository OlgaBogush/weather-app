type Props = {
  source: string
}

const WeatherIcon = ({ source }: Props) => {
  return (
    <img
      className="size-8"
      src={`https://openweathermap.org/payload/api/media/file/${source}.png`}
      alt="weather icon"
    />
  )
}

export default WeatherIcon
