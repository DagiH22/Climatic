import '../styles/ForecastChart.css'
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

function ForecastChart({ apiData,unit }) {
  if (!apiData || !apiData.city || !apiData.list) {
    // console.log("reached api");
    // console.log(apiData);
    return <p>Loading inside</p>;
  }
  const toFahreniet =(celcius)=>{
    return ((celcius * 9/5) + 32).toFixed(1)
  }
  const now = new Date();

  const data = [];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]

  for (let i = 0; i < apiData.list.length; i+=2) {
    const forecastTime = new Date(apiData.list[i].dt_txt + " UTC");

    if (forecastTime > now) {
      data.push({
        time: `${days[forecastTime.getDay()]} ${forecastTime.getHours()}:00`,
        temp: unit? (apiData.list[i].main.temp -273.15).toFixed(1) : toFahreniet(apiData.list[i].main.temp -273.15) ,
      });
      // if (data.length === 8) break;
    }
  }

  return (
    <section className='forecastChartContainer'>
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
            activeDot={{ r: 3 }}
            fill="rgba(0, 0, 255, 0.2)"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default ForecastChart