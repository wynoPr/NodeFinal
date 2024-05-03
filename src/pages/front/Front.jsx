import React from "react";
import "../../../src/App.scss";
import "./front.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Front() {
  return (
    <>
      <Header />
      <div className="back_img">
        <h1 className="heading f-w">Developers' Cheatsheet</h1>
      </div>
      <Footer />
    </>
  );
}
