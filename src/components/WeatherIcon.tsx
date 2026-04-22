type Props = {
  source: string
  className?: string
}

const WeatherIcon = ({ source, className }: Props) => {
  return (
    <img
      className={className ? className : "size-8"}
      src={`https://openweathermap.org/payload/api/media/file/${source}.png`}
      alt="weather icon"
    />
  )
}

export default WeatherIcon
