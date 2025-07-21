import '../styles/ForecastTab.css'

function ForecastTab({apiData}) { 
  const forecastTime = new Date(apiData.list[i].dt_txt + " UTC");
  const listLength = ((apiData.list.length + 1) / 5) - 1
  let finishIndex = listLength 
  let startIndex = 0;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"]
  const avgTemp = [];
  const time = []
  const now = new Date();
  const temporary = []
  let cont = 0
  // const firstDayData = 
  for(let i = startIndex; i < finishIndex ; i++ ){
    if (forecastTime > now) {
       forecastTime.getHours() + ":00"
       temporary.push( apiData.list[i].main.temp)}
       for(let j = 0; temporary.length; j++){
         cont += temporary[i]
        }
      }
    time.push(days[forecastTime.getDay()] + forecastTime.getHours() + ":00")
    avgTemp.push(cont/8)
    startIndex += listLength
    finishIndex += listLength

  for(let i = startIndex; i < finishIndex ; i++ ){
    if (forecastTime > now) {
       forecastTime.getHours() + ":00"
       temporary.push( apiData.list[i].main.temp)}
  }
  startIndex += listLength
  finishIndex += listLength

  for(let i = startIndex; i < finishIndex ; i++ ){
    if (forecastTime > now) {
       forecastTime.getHours() + ":00"
       temporary.push( apiData.list[i].main.temp)}
  }
  startIndex += listLength
  finishIndex += listLength

  for(let i = startIndex; i < finishIndex ; i++ ){
    if (forecastTime > now) {
       forecastTime.getHours() + ":00"
       temporary.push( apiData.list[i].main.temp)
      
      }
  }
  startIndex += listLength
  finishIndex += listLength

  for(let i = startIndex; i < finishIndex ; i++ ){
    if (forecastTime > now) {
       forecastTime.getHours() + ":00"
       temporary.push( apiData.list[i].main.temp)}
  }
  startIndex += listLength
  finishIndex += listLength
  return (
    <section className='forecastTab'>
        {avgTemp.map((element)=>{
          <div className="fiveDaycard">{element}</div>
        })}
        {/* <div className="fiveDaycard">forecast 2</div>
        <div className="fiveDaycard">forecast 3</div>
        <div className="fiveDaycard">forecast 4</div>
        <div className="fiveDaycard">forecast 5</div> */}
    </section>
  )
}

export default ForecastTab