import { useEffect, useState } from "react";
import data from "../../../exercise-10.json";
import "../../../src/App.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";

export default function P2({ data }) {
  const { id } = useParams();

  const [language, setLanguage] = useState({});

  useEffect(() => {
    const getLanguage = async () => {
      const { data } = await axios("http://localhost:3001/language/" + id);
      console.log(data);
      setLanguage(data);
    };
    getLanguage();
  }, []);
  return (
    <>
    <Header/>
    <div>
      <img src={language.img} alt={language.name} />
      <h2>{language.name}</h2>
      <div>
        {language?.content?.map((contenItem, contenIndex) => (
          <div key={contenIndex}>
            <a href={contenItem.url}>{contenItem.name}</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
