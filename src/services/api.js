const CURRENT_API_KEY = import.meta.env.VITE_CURRENT_WEATHER_API_KEY
const FIVE_DAY_API_KEY = import.meta.env.VITE_FIVE_DAY_WEATHER_API_KEY

const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_API_KEY}`
const CURRENT_BY_CITY_URL =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${CURRENT_API_KEY}`
const FIVE_DAY_URL= `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${FIVE_DAY_API_KEY}`
const FIVE_DAY_BY_CITY_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${FIVE_DAY_API_KEY}`
let cityName
function handelApi(city){
    cityName = city
    axios.get(CURRENT_BY_CITY_URL)
    .then(res=> {return res.data})
    .catch(err => {throw new Error(err.message)})
}
export default handelApi