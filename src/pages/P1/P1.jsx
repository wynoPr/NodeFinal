import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";

export default function P1({ dataType }) {

  const path = window.location.pathname;

  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:3001/";
  const directionUrlEn = baseUrl+ 'en';
  const directionUrlEsp = baseUrl+ 'esp';

  useEffect(() => {
    if (path.includes("en")) {
      const fetchData = async () => {
        try {
          const { data } = await axios(directionUrlEn);
          // console.log(data[dataType]);
          setData(data[dataType]);
        } catch (error) {
          console.error(`Error fetching ${dataType} data:`, error);
        }
      };
      fetchData();
    } else if (path.includes("esp")) {
      const fetchData = async () => {
        try {
          const { data } = await axios(directionUrlEsp);
          // console.log(data);
          const algo = data[dataType]
          console.log(algo);
          setData(algo);
        } catch (error) {
          console.error(`Error fetching ${dataType} data:`, error);
        }
      };
      fetchData();
    }
  }, [path, dataType]);

  // console.log(data);

  return (
    <>
      <Header />
      <Profile dataType={dataType} data={data} />
      <Footer />
    </>
  );
}
