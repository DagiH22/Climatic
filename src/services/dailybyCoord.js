import axios from 'axios'
const CURRENT_API_KEY = import.meta.env.VITE_CURRENT_WEATHER_API_KEY

async function dailybyCoord(location){
    const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${CURRENT_API_KEY}&units=metric`
    try{
        // console.log('reached  daily')
        const res = await axios.get(CURRENT_URL)
        // console.log(res.data)
        return res.data
    }
    catch(err){
        // console.error(err.message)
        throw err}
}
export default dailybyCoord