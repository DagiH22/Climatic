import './App.css'
import Header from './components/Header'
import TodayTab from './components/TodayTab'
import DailyForecastChart from './components/DailyForecastChart'
import Footer from './components/Footer'
import ForecastTab from './components/ForecastTab'
import ForecastChart from './components/ForecastChart'
import dailyApi from './services/dailyApi.js'
import fiveDayApi from './services/fiveDayApi.js'
import { useState,useEffect } from 'react'
function App() {
  const [city, setCity] = useState()
  const [dailyData, setDailyData] = useState(null)
  const [fiveDayData, setFiveDayData] = useState()
  const [error, setError] = useState()
  const [dailyTab , setDailyTab] = useState(true)
  const [isActive,setIsActive] = useState(true)
  useEffect(()=>{
    if (!city) return 
    const fetchDailyData = async () =>{
      try{
        const result = await dailyApi(city)
        setDailyData(result)
      } 
      catch(err){
        setError(err.message)
        console.log(err.message)
      }
    }
    const fetchFiveDayData = async () =>{
      try{
        const fiveDayResult = await fiveDayApi(city)
        setFiveDayData(fiveDayResult)
      } 
      catch(err){
        setError(err.message)
      }
    }
    fetchDailyData()
    fetchFiveDayData()
  }
    ,[city])
    if(dailyTab){
      return (
        <div className='appContainer'>
          <Header setCity={setCity}/>
          <div className='tabToggle'>
            <button className={dailyTab ? 'active': ''} onClick={()=>{setDailyTab(true)}}>Daily Data</button>
            <button className={dailyTab ? '': 'active'} onClick={()=>{setDailyTab(false)}}>5 Day Forecast</button>
          </div>
          {city && dailyData?.main ? <TodayTab apiData={dailyData}/> : "loading\n"} 
          {city && fiveDayData?.list ? <DailyForecastChart apiData={fiveDayData}/> : "loading\n"}
          <Footer/>
        </div>
      )
    }
    else {
      return (
        <div className='appContainer'>
          <Header setCity={setCity}/>
          <div className='tabToggle'>
            <button className={dailyTab ? 'dataToggle active ': 'dataToggle'} onClick={()=>{setDailyTab(true)}}>Daily Data</button>
            <button className={dailyTab ? 'dataToggle': 'active dataToggle'} onClick={()=>{setDailyTab(false)}}>5 Day Forecast</button>
          </div>
          {city && fiveDayData?.list ? <ForecastTab apiData={fiveDayData}/> :"laoding forcast tab"}
          {city && fiveDayData?.list ? <ForecastChart apiData={fiveDayData}/> : "\n loading forecast chart"}
          
          <Footer/>
        </div>
      )
    }

  
}

export default App
