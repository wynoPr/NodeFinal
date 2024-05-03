import { useEffect, useState } from "react";
import "../../../src/App.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../../App.scss";

export default function P2({ dataType }) {
  // Cambia el nombre de la prop a dataType
  const { id } = useParams();

  const [data, setData] = useState({}); // Cambia el nombre de la variable de estado a data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/${dataType}/${id}`);
        setData(data);
      } catch (error) {
        console.error(`Error fetching ${dataType} data:`, error);
      }
    };
    fetchData();
  }, [id, dataType]); // Añade dataType a la lista de dependencias

  return (
    <>
      <Header />
      <div className="f-w container">
        <div>
          <img src={data.img} alt={data.name} />
          {dataType === "language" ? (
            <div>
              {data?.family?.map((familyItem, familyIndex) => (
                <div key={familyIndex}>
                  <p>{familyItem.name}</p>
                  <img src={familyItem.img} alt={familyItem.name} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              {data?.content?.map((contentItem, contentIndex) => (
                <div key={contentIndex}>
                  <a href={contentItem.url}>{contentItem.name}</a>
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
