import React from 'react';
import '../styles/ForecastTab.css'; // You can style the boxes here

function ForecastTab({ apiData ,unit}) {
  if (!apiData || !apiData.list) {
    return <p>Loading forecast...</p>;
  }

  const groupedData = {};
  

  // 1. Group entries by date (YYYY-MM-DD)
  apiData.list.forEach(entry => {
    const date = entry.dt_txt.split(' ')[0]; // "2025-07-21"
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(entry);
  });

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // 2. Prepare summarized forecast for each day (max 5 days)
  const summary = Object.keys(groupedData).slice(0, 5).map(date => {
    const entries = groupedData[date];

    // Only keep daytime entries (09:00–18:00 UTC)
    const daytimeEntries = entries.filter(e => {
      const hour = new Date(e.dt_txt + " UTC").getUTCHours();
      return hour >= 9 && hour <= 18;
    });

    if (daytimeEntries.length === 0) return null; // skip if no day data

    const temps = daytimeEntries.map(e => e.main.temp);
    const avgTempC = (temps.reduce((a, b) => a + b, 0) / temps.length) - 273.15
    const avgTempF = ((avgTempC * 9/5) + 32).toFixed(1)

    const midDayEntry = daytimeEntries.find(e => e.dt_txt.includes("12:00:00"));
    const icon = midDayEntry ? midDayEntry.weather[0].icon : daytimeEntries[0].weather[0].icon;

    const weatherCount = {};
    daytimeEntries.forEach(e => {
      const main = e.weather[0].main;
      weatherCount[main] = (weatherCount[main] || 0) + 1;
    });
    const mostCommonWeather = Object.entries(weatherCount).sort((a, b) => b[1] - a[1])[0][0];

    const day = daysOfWeek[new Date(date).getDay()];

    return {
      day,
      avgTemp:unit ? avgTempC.toFixed(1) : avgTempF ,
      weather: mostCommonWeather,
      icon
    };
  }).filter(Boolean); // remove any null days

  return (
    <section className='forecastTab'>
      <div className='locationName'>
        {apiData.city.name}
      </div>
      <div className="fiveDaycardContainer">
        {summary.map((item, i) => (
          <div className="fiveDaycard" key={i}>
            <h3>{item.day}</h3>
            <div className='dataContainer'>
              <img
                src={`../weathers/${item.icon}.svg`}
                alt={item.weather}
                className="weatherIcon"
              />
              <div className='textDataContainer'>
                <p className='avgTemp'>{item.avgTemp} {unit ? "°C": "°F"}  </p>
                <p className='weatherText'>{item.weather}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ForecastTab;
