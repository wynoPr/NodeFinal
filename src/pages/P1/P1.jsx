import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";

export default function P1({ dataType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/${dataType}`);
        setData(data);
      } catch (error) {
        console.error(`Error fetching ${dataType} data:`, error);
      }
    };
    fetchData();
  }, [dataType]);

  return (
    <>
      <Header />
      <Profile data={data} />
      <Footer />
    </>
  );
}
