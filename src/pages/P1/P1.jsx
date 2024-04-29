import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";

export default function P1() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const getLanguages = async () => {
      const { data } = await axios("http://localhost:3001/language");
      setLanguages(data);
    };
    getLanguages();
  }, []);
  return (
    <>
      <Header/>
      <Profile languages={languages} />
      <Footer />
    </>
);

}
