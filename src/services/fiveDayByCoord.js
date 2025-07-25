import axios from 'axios'
const FIVE_DAY_API_KEY = import.meta.env.VITE_FIVE_DAY_WEATHER_API_KEY

async function fiveDayApi(location){
    const FIVE_DAY_URL= `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${FIVE_DAY_API_KEY}&units=metric`
    try{
        // console.log('reached 5 day')
        const res = await axios.get(FIVE_DAY_URL)
        // console.log('reached 5 day 2 part')
        // console.log(res.data)
        return res.data
    }
    catch(err){
        throw new Error(err.message)}
}
export default fiveDayApi