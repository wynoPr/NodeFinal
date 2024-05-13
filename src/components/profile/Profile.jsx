import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../App';
import "../../../src/App.scss";
import "./Profile.scss";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function Profile({ dataType, data }) {

  const path = window.location.pathname;

  if (!dataType || dataType.length === 0) {
    return <div>No data available.</div>;
  }

  console.log(data);

  const { find } = useContext(GlobalContext);
  const [filtered, setFiltered] = useState(null);

  const refresh = (find) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(find.toLowerCase())
    );
    setFiltered(filtered);
  };

  useEffect(() => {
    if (find) {
      refresh(find);
    } else {
      setFiltered(null);
    }
  }, [find]);

  // console.log(find);
  // console.log(filtered);

  return (
    <SimpleBar style={{ height: "70vh", width: "60vw" }}>
      <div className="c-language-container">
        {filtered ?
          filtered.map((language, index) => (
            <>
            {path.includes("en") && (
              <Link
                          className="u-language"
                          to={`/en/${dataType}/${language.id}`}
                          key={index}
                        >
                          <img
                            className="u-language_img"
                            src={language.img}
                            alt={language.name}
                          />
                          <h2 className="h2 tcenter">{language.name}</h2>
                        </Link>
            )}
            {path.includes("esp") && (
              <Link
                          className="u-language"
                          to={`/esp/${dataType}/${language.id}`}
                          key={index}
                        >
                          <img
                            className="u-language_img"
                            src={language.img}
                            alt={language.name}
                          />
                          <h2 className="h2 tcenter">{language.name}</h2>
                        </Link>
            )}
            </>
          ))
          :
          data.map((language, index) => (
            <>
            {path.includes("en") && (
              <Link
                          className="u-language"
                          to={`/en/${dataType}/${language.id}`}
                          key={index}
                        >
                          <img
                            className="u-language_img"
                            src={language.img}
                            alt={language.name}
                          />
                          <h2 className="h2 tcenter">{language.name}</h2>
                        </Link>
            )}
            {path.includes("esp") && (
              <Link
                          className="u-language"
                          to={`/esp/${dataType}/${language.id}`}
                          key={index}
                        >
                          <img
                            className="u-language_img"
                            src={language.img}
                            alt={language.name}
                          />
                          <h2 className="h2 tcenter">{language.name}</h2>
                        </Link>
            )}
            </>
          ))
          }
      </div>
    </SimpleBar>
  );
}
