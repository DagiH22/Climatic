import '../styles/TodaySummary.css'
import loactionIcon from '../assets/images/icon-location.svg'
import descriptionIcon from '../assets/images/description.svg'

function TodaySummary({apiData , unit}) {
  const iconUrl = `/weathers/${apiData.weather[0].icon}.svg`
  const toFahreniet =(celcius)=>{
    return ((celcius * 9/5) + 32).toFixed(1)
  }
  // console.log(apiData.weather[0].icon)
  // console.log(iconUrl)
  return (
    <div className='todaySummary'>
        <div className='mainImg'>
          <img src={iconUrl} alt="current weather icon" />
        </div>
        <div className='summaryInfo'>
            <div className='mainTemp'>{unit ? apiData.main.temp : toFahreniet(apiData.main.temp)}{unit? "°C": "°F"} </div>
            <div className='weather'>{apiData.weather[0].main}</div>
            <div className="description"><img className='Icon' src={descriptionIcon} alt="description icon" />{apiData.weather[0].description}</div>
            <div className="location"><img className='Icon' src={loactionIcon} alt="loaction icon" />{apiData.name}</div>
        </div>
    </div>
  )
}
export default TodaySummary