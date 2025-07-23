import './App.css'
import Header from './components/Header'
import TodayTab from './components/TodayTab'
import DailyForecastChart from './components/DailyForecastChart'
import Footer from './components/Footer'
import ForecastTab from './components/ForecastTab'
import ForecastChart from './components/ForecastChart'
import dailyApi from './services/dailyApi.js'
import fiveDayApi from './services/fiveDayApi.js'
import dailybyCoord from './services/dailybyCoord.js'
import fiveDayByCoord from './services/fiveDayByCoord.js'
import { useState,useEffect } from 'react'
import DataLoadingScreen from './components/DataLoadingScreen.jsx'
import ChartLoadingScreen from './components/ChartLoadingScreen.jsx'

function App() {
  const [city, setCity] = useState()
  const [dailyData, setDailyData] = useState(null)
  const [fiveDayData, setFiveDayData] = useState()
  const [error, setError] = useState()
  const [dailyTab , setDailyTab] = useState(true)
  const [isActive,setIsActive] = useState(true)
  const [location, setLocation] = useState(null);
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


  useEffect(()=>{
    const fetchDailyCoordData = async (parsed) =>{
      try{
        const result = await dailybyCoord(parsed)
        setDailyData(result)
      } 
      catch(err){
        setError(err.message)
        console.log(err.message)
      }
    }
    const fetchFiveDayCoordData = async (parsed) =>{
      try{
        const fiveDayResult = await fiveDayByCoord(parsed)
        setFiveDayData(fiveDayResult)
      } 
      catch(err){
        setError(err.message)
      }
    }

    const saved = localStorage.getItem('userLocation');
  if (saved) {
    const parsed = JSON.parse(saved)
    setLocation(parsed);
    fetchDailyCoordData(parsed)
    fetchFiveDayCoordData(parsed)
  }
  else{
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const coords ={
                lat: position.coords.latitude,
                lon: position.coords.longitude
              };
              localStorage.setItem('userLocation', JSON.stringify(coords));
              setLocation(coords);
              fetchDailyCoordData(coords)
              fetchFiveDayCoordData(coords)
            },
            (err) => {
              setError(err.message);
            }
          );
        } else {
          setError('Geolocation not supported');
        }
    }
  },[])
    if(dailyTab){
      return (
        <div className='appContainer'>
          <Header setCity={setCity}/>
          <div className='tabToggle'>
            <button className={dailyTab ? 'active': ''} onClick={()=>{setDailyTab(true)}}>Daily Data</button>
            <button className={dailyTab ? '': 'active'} onClick={()=>{setDailyTab(false)}}>5 Day Forecast</button>
          </div>
          {dailyData?.main ? <TodayTab apiData={dailyData}/> : <DataLoadingScreen/>} 
          {fiveDayData?.list ? <DailyForecastChart apiData={fiveDayData}/> : <ChartLoadingScreen/>}
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
          { fiveDayData?.list ? <ForecastTab apiData={fiveDayData}/> :<DataLoadingScreen/>}
          { fiveDayData?.list ? <ForecastChart apiData={fiveDayData}/> :<ChartLoadingScreen/>}
          
          <Footer/>
        </div>
      )
    }

  
}

export default App
