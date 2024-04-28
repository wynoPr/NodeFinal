import React from 'react'
import './footer.scss'
import '../../../src/App.scss'
import { NavLink } from 'react-router-dom'

export default function Links({color}) {
  return (
    <>
        <NavLink to='/languages' className={`link h1 ${color}`}>Languages</NavLink>
        <NavLink to='/families' className={`link h1 ${color}`}>Families</NavLink>
        <NavLink to='/timeline' className={`link h1 ${color}`}>TimeLine</NavLink>
    </>
  )
}
