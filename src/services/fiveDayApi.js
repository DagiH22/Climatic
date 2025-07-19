import axios from 'axios'
const FIVE_DAY_API_KEY = import.meta.env.VITE_FIVE_DAY_WEATHER_API_KEY
let lat
let lon
const FIVE_DAY_URL= `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${FIVE_DAY_API_KEY}`
function fiveDayApi(city){
    const FIVE_DAY_BY_CITY_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${FIVE_DAY_API_KEY}&units=metric`
    cityName = city
    axios.get(FIVE_DAY_BY_CITY_URL)
    .then(res=> {return res.data})
    .catch(err => {throw new Error(err.message)})
}
export default fiveDayApi