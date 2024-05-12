import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";

export default function P1({ dataType }) {
  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:3001/";
  const directionUrl = baseUrl + dataType;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(directionUrl);
        // console.log(data);
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
      <Profile dataType={dataType} data={data} />
      <Footer />
    </>
  );
}
