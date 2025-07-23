import axios from 'axios'
const CURRENT_API_KEY = import.meta.env.VITE_CURRENT_WEATHER_API_KEY

let lat
let lon

async function dailyApi(city){
    const CURRENT_BY_CITY_URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CURRENT_API_KEY}&units=metric`
    try{
        const res = await axios.get(CURRENT_BY_CITY_URL)
        return res.data
    }
    catch(err){
        console.error(err.message)
        throw new Error(err.message)}
}
export default dailyApi