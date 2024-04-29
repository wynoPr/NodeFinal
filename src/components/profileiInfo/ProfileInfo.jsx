import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProfileInfo() {
  const { id } = useParams();

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const getLanguage = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/language/`);
        setLanguages(data);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };
    getLanguage();
  }, [id]);
  console.log(languages);
  return (
    <div>
      {languages.map((language, index) => (
        <div key={index}>
          <Link to={`/language/${language.id}`}>
            <img src={language.img} alt={language.name} />
            <h2>{language.name}</h2>
            <div>
              {language.content &&
                language.content.map((contentItem, contentIndex) => (
                  <div key={contentIndex}>
                    <a href={contentItem.img}>{contentItem.name}</a>
                  </div>
                ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
