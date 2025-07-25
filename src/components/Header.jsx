import {useState} from 'react'
import '../styles/Header.css'
import searchImg from '../assets/images/searchIcon.svg'
// import handelApi from '../services/api'


function Header({setCity , isLightMode, setisLightMode, isCelciusActive, setIsCelciusActive}) {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = ()=>{
    setCity(inputValue)
    setInputValue('')
  }
  
    

  return (
    <header>
        <div className='climatic'>Climatic</div>
        <div className='search'>
           <input type="text" id='search' placeholder='Enter city name' value={inputValue} onChange={ e => {setInputValue(e.target.value)}} onKeyDown={e => {if (e.key === 'Enter') {handleSubmit()}}}/>
           <button className='searchBtn' onClick={handleSubmit}><img src={searchImg} alt="search icon" /></button>
        </div>
        <div className='toggleContainer'>
          <div className='unit'>
              <button className={isCelciusActive ? 'toggle option active' : 'toggle option'} onClick={()=>{setIsCelciusActive(true)}}>°C</button>
              <button className={isCelciusActive ? 'toggle option' : 'toggle option active'} onClick={()=>{setIsCelciusActive(false)}}>°F</button>
          </div>
          <div className={isLightMode ? 'mode dayIsActive' : 'mode nightIsActive' }>
              <button className ={isLightMode ? 'toggle LightMode' : 'toggle night' } onClick={()=>{setisLightMode(true)}}></button>
              <button className={!isLightMode ? 'toggle NightMode' : 'toggle light' } onClick={()=>{setisLightMode(false)}}></button>
          </div>
        </div>
    </header>
  )
}

export default Header