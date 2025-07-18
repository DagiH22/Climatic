import {useState} from 'react'
import '../styles/Header.css'
import searchImg from '../assets/images/searchIcon.svg'
// import handelApi from '../services/api'


function Header({setCity}) {

  const [inputValue, setInputValue] = useState('')
  const handleClick = ()=>{
    setCity(inputValue)
    setInputValue('')
  }
    

  return (
    <header>
        <div className='location'>Location </div>
        <div className='search'>
           <input type="text" id='search' placeholder='Enter city name' value={inputValue} onChange={ e => {setInputValue(e.target.value)}} />
           <button className='searchBtn' onClick={handleClick}><img src={searchImg} alt="search icon" /></button>
        </div>
        <div className='unit'>
            <button className='toggle option active'>°C</button>
            <button className='toggle option'>°F</button>
        </div>
        <div className='mode'>
            <button className='toggle lightMode '>L</button>
            <button className='toggle nightMode '>N</button>
        </div>
    </header>
  )
}

export default Header