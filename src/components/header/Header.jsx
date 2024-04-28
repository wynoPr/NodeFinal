import React from 'react'
import './header.scss'
import '../../../src/App.scss'
import { Link } from 'react-router-dom';
import SearchBar from './../searchbar/SearchBar.jsx';

export default function Header(location) {

  const path = window.location.pathname;
//console.log(path);
const gobacks = () => {
  window.history.goBack();
};

  return (
    <>
      <header className='header'>
        {path === "/languages" && <SearchBar/>}
        {path.includes("/profile") && <Link to="javascript:void(0)" onClick={gobacks} className="link icon h3 goback"> &#60; Go Back</Link>}
        <div className='header_language'>
          <a><img className="header_language_icons link icon" src='src\img\spain.png' alt='cambiar idioma a español '></img></a>
          <a><img className="header_language_icons link icon" src='src\img\united-kingdom.png' alt='change language to english'></img></a>
          {path !== "/" && <Link to='/'><span className="material-symbols-rounded header_language_icons link icon">home</span></Link>}
        </div>
      </header>
    </>
  )
}
