import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <header>
        <div className='location'>Location </div>
        <div className='search'>
           <input type="text" id='search' placeholder='Enter city name ...'/>
        </div>
        <div className='unit'>
            <button className='option active'>°C</button>
            <button className='option'>°F</button>
        </div>
        <div className='mode'>
            <button className='lightMode '>L</button>
            <button className='nightMode '>N</button>
        </div>
    </header>
  )
}

export default Header