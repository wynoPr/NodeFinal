import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function P2langinfo({ dataType }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const url = "http://localhost:3001/language/" + id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);
        setData(data);
      } catch (error) {
        console.error(`Error fetching ${dataType}data:`, error);
      }
    };
    fetchData();
  }, []);
  const dFamily = data.family;
  const dFriendly = data.friendly;
  console.log(dFriendly);
  return (
    <>
      <Header />
      <div className="f-w container">
        <div>
          <img src={data.img} alt={data.name} />
          <div>
            <p>{dFamily.name}</p>
            <img src={dFamily.img} alt={dFamily.name} />
          </div>
        </div>
        <div className="h1">{data.version}</div>
        {/* <div>
          {dFriendly.map((friendlyItem, id) => (
            <div key={id}>
              <p>hola</p>
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </>
  );
}
