import '../styles/DailyForecastCard.css';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

function DailyForecastCard({ apiData,unit}) {
  if (!apiData || !apiData.city || !apiData.list) {
    console.log("reached api");
    console.log(apiData);
    return <p>Loading forecast...</p>;
  }
  const toFahreniet =(celcius)=>{
    return ((celcius * 9/5) + 32).toFixed(1)
  }
  const now = new Date();
  const data = [];

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]

  for (let i = 0; i < apiData.list.length; i++) {
    const forecastTime = new Date(apiData.list[i].dt_txt + " UTC");

    if (forecastTime > now) {
      data.push({
        time: `${days[forecastTime.getDay()]} ${forecastTime.getHours()}:00`,
        temp: unit? (apiData.list[i].main.temp ).toFixed(1) : toFahreniet(apiData.list[i].main.temp ) ,
      });
      if (data.length === 8) break;
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='dcustom'>
          <p> {label}</p>
          <p> {payload[0].value} {unit ? '°C':'°F'}</p>
        </div>
      )
    }
  
    return null;
  }
  return (
    <section className='dForcastCardContainer'>
      <p>24 hr Temperature Forecast chart with 3 hr interval </p>
      <div className='chartWrapper'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="time" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="blue"
              strokeWidth={2}
              dot={{ fill: '#fff', stroke: 'blue', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
              fill="rgba(0, 0, 255, 0.2)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default DailyForecastCard
