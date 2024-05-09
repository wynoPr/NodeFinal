import React from "react";
import "../../../src/App.scss";
import "./front.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Front() {
  return (
    <>
        <Header/>
        <section className='front-main'>
          <img className='heading' src='src\img\logo_b.png' alt='logo Developer Cheat Sheet'></img>
          <video className='front-vid container' autoPlay muted loop>
            <source src='src/img/final-react_front_video.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='back_color-stripe'></div>
        </section>
        <Footer/>
    </>
  );
}
