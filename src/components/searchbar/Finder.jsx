import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './finder.scss';
import { GlobalContext } from '../../App';

export default function Finder() {

  const path = window.location.pathname;

  const { find, finder } = useContext(GlobalContext);
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');

  // Efecto para restablecer 'find' y el valor del input a su estado original al cambiar la URL
  useEffect(() => {
    finder(undefined); // Restablecer 'find'
    setInputValue(''); // Restablecer el valor del input
  }, [location.pathname]); // Se ejecutará cada vez que cambie la URL

  const sendInput = (event) => {
    setInputValue(event.target.value); // Actualizar el valor del input
    finder(event.target.value);
    // console.log(find);
  };

  return (
    <div className='searchbar'>
      <span className="material-symbols-rounded searchbar_icon">search</span>
      {path.includes("en") && (
      <input
        type='text'
        className='searchbar_input h3'
        id='searchbar'
        placeholder='Search by Name'
        value={inputValue}
        onChange={sendInput}
      />
      )}
      {path.includes("esp") && (
      <input
        type='text'
        className='searchbar_input h3'
        id='searchbar'
        placeholder='Busca por el nombre'
        value={inputValue} 
        onChange={sendInput}
      />
      )}
    </div>
  );
}


