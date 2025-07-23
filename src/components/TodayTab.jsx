import '../styles/TodayTab.css'
import TodayExtra from "./TodayExtra"
import TodaySummary from "./TodaySummary"

function TodayTab({apiData,unit}) {
  
  return (
    <main className='todayTab'>
        <TodaySummary apiData={apiData} unit={unit}/>
        <TodayExtra apiData={apiData} unit={unit}/>
    </main>
  )
}

export default TodayTab