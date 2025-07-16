import '../styles/TodayExtra.css'

function TodayExtra() {
  return (
    <section className='todayExtra'>
        <p>Today's Highlights</p>
        <div className='extraContainer'>
            <div className="tExtraCard feelsLike">Feels Like</div>
            <div className="tExtraCard humidity">Humidity</div>
            <div className="tExtraCard visibility">Visibility</div>
            <div className="tExtraCard wind">Wind</div>
            <div className="tExtraCard cloudiness">Cloudiness</div>
            <div className="tExtraCard sunRise">SunRise</div>
            <div className="tExtraCard sunSet">SunSet</div>
        </div>
    </section>
  )
}

export default TodayExtra