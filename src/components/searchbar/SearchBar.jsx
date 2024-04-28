import React from 'react'
import './searchbar.scss'

export default function SearchBar() {
  return (
    <>
        <div className='searchbar' >
            <span class="material-symbols-rounded searchbar_icon">search</span>
            <input type='text' className='searchbar_input h3' id='searchbar' placeholder='Search by Name'></input>
        </div>
    </>
  )
}
