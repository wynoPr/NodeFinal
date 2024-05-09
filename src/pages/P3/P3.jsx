
import React from 'react'
import './p3.scss'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Timeline from '../../components/timeline/Timeline';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export default function P3() {
  return (
    <>
        <Header/>
        
        <SimpleBar style={{ height: '70vh', width: '80vw' }}>
          <Timeline />
        </SimpleBar>
        <Footer />
    </>
  );
}
