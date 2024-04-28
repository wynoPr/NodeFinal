import React, { useEffect, useState } from 'react'
import './timeline.scss'
import '../../../src/App.scss'
import CardAlt from '../cardAlt/CardAlt';
import axios from 'axios';

export default function Timeline() {

    const [languages, setLanguages] = useState([]);
    useEffect(() => {
    const getLanguages = async () => {
      const { data } = await axios("http://localhost:3001/language");
      setLanguages(data);
    };
    getLanguages();
  }, []);

languages.sort((a, b) => a.order - b.order);

//   console.log(languages);

//draw arrow

window.onload = () => {
    const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// Escalar el canvas para mejorar la resolución
const scale = 10;
console.log(scale);
canvas.width = 30 * scale;
canvas.height = 40 * scale;
canvas.style.width = '30px';
canvas.style.height = '40px';
ctx.scale(scale, scale);

// Establecer el grosor y el color de la línea
ctx.lineWidth = 2.5;
ctx.strokeStyle = '#2d2a26';

// Coordenadas para la flecha
const x1 = 15; // Punto de inicio x
const y1 = 0;  // Punto de inicio y (parte superior del canvas)
const x2 = 15; // Punto medio x
const y2 = 25; // Punto medio y (parte inferior del canvas)
const x3 = 5;  // Punto final izquierdo x
const y3 = 15; // Punto final izquierdo y
const x4 = 25; // Punto final derecho x
const y4 = 15; // Punto final derecho y

// Dibujar la línea vertical de la flecha
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, 40);
ctx.stroke();

// Dibujar los extremos de la flecha
ctx.beginPath();
ctx.moveTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x2, y2);
ctx.lineTo(x4, y4);
ctx.stroke();


}


  return (
    <>
    <section  className="container timeline">
        <div className="timeline_scroll-window">
            <div className="timeline_head">
                <h2 className='h2 timeline_head_h'>0</h2>
                <canvas id="miCanvas" className='canva'></canvas>
            </div>
            {languages.map((item, index) => <CardAlt arr={item} key={index}/>)}
        </div>    
    </section> 
    </>
  )
}
