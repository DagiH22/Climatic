import '../styles/ForecastChart.css'
import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

  ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );
  const data ={
    labels:['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 8, 15, 10, 17],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3, // smooth curve
        pointBackgroundColor: '#fff'
      }
    ]
  }
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Monthly Sales Data'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
function ForecastChart({apiData}) {
  return (
    <section className="forecastChartContainer">
        <Line data={data} options={options} />;
    </section>
  )
}

export default ForecastChart