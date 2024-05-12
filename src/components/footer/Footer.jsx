import React from 'react'
import './footer.scss'
import '../../../src/App.scss'
import { Link, NavLink } from 'react-router-dom'
import Links from './Links'

export default function Footer() {

    const path = window.location.pathname;

  return (
    <>
        <footer className='footer'>
            {path === "/" ? <Links color='f-w'></Links> : <Links></Links>}
        </footer>
    </>
  )
}


