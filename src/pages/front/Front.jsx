import React from 'react'
import '../../../src/App.scss'
import './front.scss'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

export default function Front() {
  return (
    <>
        <Header/>
        <div className='container'>
            <h1 className='heading f-w'>Introducción a la programación</h1>
        </div>
        <Footer/>
    </>
  )
}
