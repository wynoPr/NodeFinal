import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../../../src/App.scss";
import "./P2.scss";

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
  const dContent = data.content;
  console.log(dFamily);

  return (
    <>
      <Header />
      {/* <div className="container_row">
        <div className="container_mg-20">
          {dFamily && (
            <div>
              <p className="p-b">
                Family:
                <br />
                {dFamily.name}
              </p>
              <img className="img-200" src={dFamily.img} alt={dFamily.name} />
            </div>
          )}
        </div>
        <div className="container_mg-20 p-b">
          <img className="img-200" src={data.img} alt={data.name} />
          <br />
          Version:
          <br />
          {data.version}
        </div>
        {dFriendly && (
          <div className="container_mg-20">
            <p className="p-b">Friendly with:</p>
            {dFriendly.map((friendlyItem, id) => (
              <div key={id}>
                <p className="p-b">{friendlyItem.name}</p>
                <img
                  className="img-100"
                  src={friendlyItem.img}
                  alt={friendlyItem.name}
                />
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* div padre content que lleva flex row */}
      <div className="container_row u-mg-20">
        {/* div izqdo descripcion */}
        <div className="container u-mg-20">
          {/* div arriba flex column logo nombre version */}
          <div className="container_row u-mg-20">
            {/* img logo izqda */}
            <img className="img-100" src={data.img} alt={data.name} />
            {/* div nombre family version */}
            <div>
              <p className="h3">{data.name}</p>
              <p className="p-b">Family: {dFamily.name}</p>
            </div>
          </div>
          {/* div abajo flex row friendly with e imagenes*/}
          <div>
            {/* div abajo */}
            <p className="p-b u-mg-20">Friendly with:</p>
            <div>
              {dFriendly && (
                <div className="container_row u-mg-20">
                  {dFriendly.map((friendlyItem, id) => (
                    <div key={id} u-mg-20>
                      <p className="p-b">{friendlyItem.name}</p>
                      <img
                        className="img-100"
                        src={friendlyItem.img}
                        alt={friendlyItem.name}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* div derecho contenidos */}
        <div className="container_mg-20 ">
          <p className="p-s">Contents:</p>
          {dContent && (
            <div className="u-mg-20">
              {dContent.map((dContentItem, id) => (
                <div key={id}>
                  <a href={dContentItem.url} className="p-b">
                    {dContentItem.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
