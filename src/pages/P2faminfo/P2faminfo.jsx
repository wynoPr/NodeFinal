import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function P2faminfo({ dataType }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const url = "http://localhost:3001/families/" + id;

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
  return (
    <>
      <Header />
      <div className="f-w container">
        <div>
          <img src={data.img} alt={data.name} />
          <div>
            {data.content.map((famItem, id) => (
              <div key={id}>
                <p>{famItem.name}</p>
                <img src={famItem.img} alt={famItem.name} />
              </div>
            ))}
          </div>
          <div>{data.description}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
