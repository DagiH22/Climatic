import './App.css'
import Header from './components/Header'
import TodayTab from './components/TodayTab'
import DailyForecastChart from './components/DailyForecastChart'
import Footer from './components/Footer'
import ForecastTab from './components/ForecastTab'
import ForecastChart from './components/ForecastChart'
// import handelApi from './services/api.js'
import { useState,useEffect } from 'react'
function App() {
  const [city, setCity] = useState()
  const [dailyData, setDailyData] = useState()
  const [fiveDayData, setFiveDayData] = useState()
  const [error, setError] = useState()
  useEffect(()=>{
    if (!city) return 
    const fetchDailyData = async () =>{
      try{
        const result = await handelApi(city)
        setDailyData(result)
      } 
      catch(err){
        setError(err.message)
      }
    }
    fetchDailyData()
  }
    ,[city])

  return (
    <>
      <Header setCity={setCity}/>
      <TodayTab apiData={dailyData}/>
      {/* <ForecastTab apiData={fiveDayData}/> */}
      {/* <DailyForecastChart apiData={dailyData}/> */}
      <ForecastChart apiData={fiveDayData}/>
      <Footer/>
    </>
  )
}

export default App
