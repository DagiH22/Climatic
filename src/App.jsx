import './App.css'
import Header from './components/Header'
import TodayTab from './components/TodayTab'
import DailyForecastCard from './components/DailyForecastCard'
import Footer from './components/Footer'
import ForecastTab from './components/ForecastTab'

function App() {

  return (
    <>
      <Header/>
      {/* <TodayTab/> */}
      <ForecastTab/>
      <DailyForecastCard/>
      <Footer/>
    </>
  )
}

export default App
