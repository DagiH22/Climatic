import '../styles/TodayTab.css'
import TodayExtra from "./TodayExtra"
import TodaySummary from "./TodaySummary"

function TodayTab({apiData}) {
  
  return (
    <main className='todayTab'>
        <TodaySummary apiData={apiData}/>
        <TodayExtra apiData={apiData}/>
    </main>
  )
}

export default TodayTab