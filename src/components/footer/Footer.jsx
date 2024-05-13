import React from 'react'
import './footer.scss'
import '../../../src/App.scss'
import { Link, NavLink } from 'react-router-dom'
import Links from './Links'

export default function Footer({language}) {

    const path = window.location.pathname;

  return (
    <>
        <footer className='footer'>
            {path === "/en" || path === "/esp" ? <Links color='f-w' language={language}></Links> : <Links></Links>}
        </footer>
    </>
  )
}


