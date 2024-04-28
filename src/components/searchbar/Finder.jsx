import React from 'react'
import './finder.scss'

export default function Finder() {
  return (
    <>
        <div className='searchbar' >
            <span className="material-symbols-rounded searchbar_icon">search</span>
            <input type='text' className='searchbar_input h3' id='searchbar' placeholder='Search by Name'></input>
        </div>
    </>
  )
}
