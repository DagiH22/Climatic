import '../styles/TodaySummary.css'

function TodaySummary({apiData}) {
  console.log(apiData.weather.main)
  console.log(apiData.weather.description)
  const iconUrl = `https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`
  return (
    <div className='todaySummary'>
        <div className='mainImg'>
          <img src={iconUrl} alt="current weather icon" />
        </div>
        <div className='summaryInfo'>
            <div className='mainTemp'>{apiData.main.temp}°C </div>
            <div className='weather'>{apiData.weather[0].main}</div>
            <div className="description">{apiData.weather[0].description}</div>
            <div className="location">{apiData.name}</div>
        </div>
    </div>
  )
}
export default TodaySummary