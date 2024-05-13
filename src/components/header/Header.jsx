import React from 'react'
import './header.scss'
import '../../../src/App.scss'
import { Link } from 'react-router-dom';
import Finder from '../searchbar/Finder';

export default function Header() {

  const path = window.location.pathname;
// console.log(path);
const gobacks = () => {
  window.history.goBack();
};

  return (
    <>
      { path.includes("en") && 
        <header className='header'>
          { (path.includes("/languages") || (path.includes("/families") && !path.includes("/families/") )) && <Finder/> }
          {path.includes("/language/") && <Link to="/en/languages" onClick={gobacks} className="link h3 goback"> &#60; Go Back</Link>}
          {path.includes("/families/") && <Link to="/en/families" onClick={gobacks} className="link h3 goback"> &#60; Go Back</Link>}
          <div className='header_language'>
            <Link to="/esp" ><img className="header_language_icons link icon" src='../../src/img/spain.png' alt='cambiar idioma a español '></img></Link>
            <Link to="/en" ><img className="header_language_icons link icon" src='../../src/img/united-kingdom.png' alt='change language to english'></img></Link>
            {path !== "/en" && <Link to='/'><span className="material-symbols-rounded header_language_icons link icon">home</span></Link>}
            {/* <button className='faves_button' id='faves_button'><span className="material-symbols-rounded header_language_icons link icon">star</span></button> */}
          </div>
        </header>
      }
      { path.includes("esp") && 
        <header className='header'>
          { (path === "/esp/languages" || path === "/esp/families") && <Finder/> }
          {path.includes("/language/") && <Link to="/esp/languages" onClick={gobacks} className="link h3 goback"> &#60; Retroceder</Link>}
          {path.includes("/families/") && <Link to="/esp/families" onClick={gobacks} className="link h3 goback"> &#60; Retroceder</Link>}
          <div className='header_language'>
            <Link to="/esp" ><img className="header_language_icons link icon" src='../../src/img/spain.png' alt='cambiar idioma a español '></img></Link>
            <Link to='/en' ><img className="header_language_icons link icon" src='../../src/img/united-kingdom.png' alt='change language to english'></img></Link>
            {path !== "/esp" && <Link to='/esp'><span className="material-symbols-rounded header_language_icons link icon">home</span></Link>}
            {/* <button className='faves_button' id='faves_button'><span className="material-symbols-rounded header_language_icons link icon">star</span></button> */}
          </div>
        </header>
      }
    </>
  )
}
