import '../styles/TodayExtra.css'
import cloudiness from '../assets/images/cloud-sun.svg'
import humidity from '../assets/images/humidity.svg'
import sunrise from '../assets/images/sunrise.svg'
import sunset from '../assets/images/sunset.svg'
import feelsLike from '../assets/images/temperature.svg'
import visibility from '../assets/images/visibility.svg'
import wind from '../assets/images/wind.svg'

function TodayExtra({apiData}) {
  return (
    <section className='todayExtra'>
      <p className='todayHighlight'>Today's Highlights</p>
      <div className='extraContainer'>

        <div className="tExtraCard feelsLike">
          <div className="innerex">
            <img src={feelsLike} alt="temperature icon" />
            <span>Feels Like</span>
          </div>
          <p>{apiData.main.feels_like}°C</p>
        </div>

        <div className="tExtraCard humidity">
          <div className="innerex">
            <img src={humidity} alt="humidity icon" />
            <span>Humidity</span>
          </div>
          <p>{apiData.main.humidity}%</p>
        </div>

        <div className="tExtraCard visibility">
          <div className="innerex">
            <img src={visibility} alt="visibility icon" />
            <span>Visibility</span>
          </div>
          <p>{apiData.visibility / 1000} km</p>
        </div>

        <div className="tExtraCard wind">
          <div className="innerex">
            <img src={wind} alt="wind icon" />
            <span>Wind</span>
          </div>
          <p>{apiData.wind.speed} m/s, {apiData.wind.deg}°</p>
        </div>

        <div className="tExtraCard cloudiness">
          <div className="innerex">
            <img src={cloudiness} alt="cloud with sun icon" />
            <span>Cloudiness</span>
          </div>
          <p>{apiData.clouds.all}%</p>
        </div>

        <div className="tExtraCard sunRise">
          <div className="innerex">
            <img src={sunrise} alt="sunrise icon" />
            <span>Sunrise</span>
          </div>
          <p>{new Date(apiData.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
        </div>

        <div className="tExtraCard sunSet">
          <div className="innerex">
            <img src={sunset} alt="sunset icon" />
            <span>Sunset</span>
          </div>
          <p>{new Date(apiData.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
        </div>

      </div>
    </section>
  )
}


export default TodayExtra