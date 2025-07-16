import '../styles/TodayTab.css'
import TodayExtra from "./TodayExtra"
import TodaySummary from "./TodaySummary"

function TodayTab() {
  return (
    <main className='todayTab'>
        <TodaySummary/>
        <TodayExtra/>
    </main>
  )
}

export default TodayTab