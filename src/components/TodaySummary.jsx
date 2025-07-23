import '../styles/TodaySummary.css'
import loactionIcon from '../assets/images/icon-location.svg'
import descriptionIcon from '../assets/images/description.svg'

function TodaySummary({apiData}) {
  const iconUrl = `/weathers/${apiData.weather[0].icon}.svg`
  // console.log(apiData.weather[0].icon)
  // console.log(iconUrl)
  return (
    <div className='todaySummary'>
        <div className='mainImg'>
          <img src={iconUrl} alt="current weather icon" />
        </div>
        <div className='summaryInfo'>
            <div className='mainTemp'>{apiData.main.temp}°C </div>
            <div className='weather'>{apiData.weather[0].main}</div>
            <div className="description"><img className='Icon' src={descriptionIcon} alt="description icon" />{apiData.weather[0].description}</div>
            <div className="location"><img className='Icon' src={loactionIcon} alt="loaction icon" />{apiData.name}</div>
        </div>
    </div>
  )
}
export default TodaySummary