import {useState} from 'react'
import '../styles/Header.css'
import searchImg from '../assets/images/searchIcon.svg'
// import handelApi from '../services/api'


function Header({setCity}) {
  const [isCelciusActive,setIsCelciusActive] = useState(true)
  const [isLightMode,setisLightMode] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleClick = ()=>{
    setCity(inputValue)
    setInputValue('')
  }
  
    

  return (
    <header>
        <div className='climatic'>Climatic</div>
        <div className='search'>
           <input type="text" id='search' placeholder='Enter city name' value={inputValue} onChange={ e => {setInputValue(e.target.value)}} />
           <button className='searchBtn' onClick={handleClick}><img src={searchImg} alt="search icon" /></button>
        </div>
        <div className='toggleContainer'>
          <div className='unit'>
              <button className={isCelciusActive ? 'toggle option active' : 'toggle option'} onClick={()=>{setIsCelciusActive(true)}}>°C</button>
              <button className={isCelciusActive ? 'toggle option' : 'toggle option active'} onClick={()=>{setIsCelciusActive(false)}}>°F</button>
          </div>
          <div className='mode'>
            
              <button className ={isLightMode ? 'toggle activeMode' : 'toggle' } onClick={()=>{setisLightMode(true)}}>L</button>
              <button className={isLightMode ? 'toggle' : 'toggle activeMode' } onClick={()=>{setisLightMode(false)}}>N</button>
          </div>
        </div>
    </header>
  )
}

export default Header