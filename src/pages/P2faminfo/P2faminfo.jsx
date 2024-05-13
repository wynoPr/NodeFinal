import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../../../src/App.scss";
import "../P2langinfo/P2.scss";

export default function P2faminfo({ dataType }) {
  const { id } = useParams();
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
          console.log(data[dataType]);
          setData(data[dataType].find(item => item.id === id));
        } catch (error) {
          console.error(`Error fetching ${dataType} data:`, error);
        }
      };
      fetchData();
    } else if (path.includes("esp")) {
      const fetchData = async () => {
        try {
          const { data } = await axios(directionUrlEsp);
          // console.log(data[dataType]);
          setData(data[dataType].find(item => item.id === id));
        } catch (error) {
          console.error(`Error fetching ${dataType} data:`, error);
        }
      };
      fetchData();
    }
  }, [path, dataType]);

  const dCont = data.content;
  console.log(dCont);

  return (
    <>
      <Header />
      <div className="container">
        <div className="bg-w container_padding width-narrow">
          <p className="h2 u-mg-10">{data.name}</p>
          <img className="img-200 u-mg-10" src={data.img} alt={data.name} />
          {dCont && (
            <div>
              {dCont.map((contItem, id) => (
                <div key={id}>
                  <p className="p-b u-mg-10">{contItem}</p>
                </div>
              ))}
            </div>
          )}
          <div className="p-s">{data.description}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
