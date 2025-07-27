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
import Error from './components/Error.jsx'

function App() {
  const [isLightMode,setisLightMode] = useState(() => {return localStorage.getItem('theme') === 'light' ?? false});
  const [isCelciusActive,setIsCelciusActive] = useState(()=>{return localStorage.getItem('tempMode') === 'celsius' ?? true})
  const [city, setCity] = useState('')
  const [dailyData, setDailyData] = useState(null)
  const [fiveDayData, setFiveDayData] = useState()
  const [error, setError] = useState()
  const [dailyTab , setDailyTab] = useState(true)
// const [isActive,setIsActive] = useState(true)
  // const [location, setLocation] = useState(null);
  useEffect(()=>{
    if(isLightMode){
       document.body.classList.add('lightMode');
    }
    else{
      document.body.classList.remove('lightMode');
    }
  },[isLightMode])
  useEffect(()=>{
    if (!city) return 
    const fetchDailyData = async () =>{
      try{
        const result = await dailyApi(city)
        setDailyData(result)
      } 
      catch(err){
        setError(err)
        console.log(err.message)
      }
    }
    const fetchFiveDayData = async () =>{
      try{
        const fiveDayResult = await fiveDayApi(city)
        setFiveDayData(fiveDayResult)
      } 
      catch(err){
        setError(err)
      }
    }
    fetchDailyData()
    fetchFiveDayData()
  }
  ,[city])


  useEffect(()=>{
    // const theme = localStorage.getItem('theme');
    // console.log(theme)
    // setisLightMode(theme === 'light');
    const fetchDailyCoordData = async (parsed) =>{
      try{
        const result = await dailybyCoord(parsed)
        setDailyData(result)
      } 
      catch(err){
        setError(err)
        console.log(err.message)
      }
    }
    const fetchFiveDayCoordData = async (parsed) =>{
      try{
        const fiveDayResult = await fiveDayByCoord(parsed)
        setFiveDayData(fiveDayResult)
      } 
      catch(err){
        setError(err)
      }
    }

    const saved = localStorage.getItem('userLocation');
  if (saved) {
    const parsed = JSON.parse(saved)
    
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
      return (
        <div className='appContainer'>
          <Header setCity={setCity} isLightMode={isLightMode} setisLightMode={setisLightMode} setIsCelciusActive={setIsCelciusActive} isCelciusActive={isCelciusActive}/>
          {error ? <Error err={error}/> : 
            <div className='mainContainer'>
            <div className='tabToggle'>
              <button className={dailyTab ? 'active tabToggleBtn' : 'tabToggleBtn'} onClick={() => setDailyTab(true)}>Daily Data</button>
              <button className={!dailyTab ? 'active tabToggleBtn' : 'tabToggleBtn'} onClick={() => setDailyTab(false)}>5 Day Forecast</button>
            </div>
          
            {dailyTab ? (
              <>
                {dailyData?.main ? <TodayTab apiData={dailyData} unit={isCelciusActive} /> : <DataLoadingScreen />}
                {fiveDayData?.list ? <DailyForecastChart apiData={fiveDayData} unit={isCelciusActive} /> : <ChartLoadingScreen />}
              </>
            ) : (
              <>
                {fiveDayData?.list ? <ForecastTab apiData={fiveDayData} unit={isCelciusActive} /> : <DataLoadingScreen />}
                {fiveDayData?.list ? <ForecastChart apiData={fiveDayData} unit={isCelciusActive} /> : <ChartLoadingScreen />}
              </>
            )}
          </div>}
          <Footer/>
        </div>
      )
    }
export default App