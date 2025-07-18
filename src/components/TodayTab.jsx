import '../styles/TodayTab.css'
import TodayExtra from "./TodayExtra"
import TodaySummary from "./TodaySummary"

function TodayTab({apiData}) {
  
  return (
    <main className='todayTab'>
        <TodaySummary/>
        <TodayExtra/>
    </main>
  )
}

export default TodayTab