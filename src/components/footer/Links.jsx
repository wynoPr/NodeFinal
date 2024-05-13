import React from 'react';
import './footer.scss';
import '../../../src/App.scss';
import { NavLink } from 'react-router-dom';

export default function Links({color}) {

  const path = window.location.pathname;

  return (
    <>
      {path.includes("en") && (
        <>
          <NavLink to='/en/languages' className={`link h1 ${color}`}>Languages</NavLink>
          <NavLink to='/en/families' className={`link h1 ${color}`}>Families</NavLink>
          <NavLink to='/en/timeline' className={`link h1 ${color}`}>TimeLine</NavLink>
        </>
      )}
      {path.includes("esp") && (
        <>
          <NavLink to='/esp/languages' className={`link h1 ${color}`}>Lenguajes</NavLink>
          <NavLink to='/esp/families' className={`link h1 ${color}`}>Familias</NavLink>
          <NavLink to='/esp/timeline' className={`link h1 ${color}`}>Cronología</NavLink>
        </>
      )}
    </>
  );
  
}

// {path.includes("en") && (
  
// )}