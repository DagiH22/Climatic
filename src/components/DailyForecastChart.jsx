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

function DailyForecastCard({ apiData }) {
  if (!apiData || !apiData.city || !apiData.list) {
    console.log("reached api");
    console.log(apiData);
    return <p>Loading forecast...</p>;
  }

  const now = new Date();

  const data = [];

  for (let i = 0; i < apiData.list.length; i++) {
    const forecastTime = new Date(apiData.list[i].dt_txt + " UTC");

    if (forecastTime > now) {
      data.push({
        time: forecastTime.getHours() + ":00",
        temp: apiData.list[i].main.temp,
      });

      if (data.length === 8) break;
    }
  }

  return (
    <section className='dForcastCardContainer'>
      <ResponsiveContainer width="90%" height="90%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
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
    </section>
  );
}

export default DailyForecastCard;
