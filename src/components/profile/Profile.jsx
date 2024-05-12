import React from "react";
import "../../../src/App.scss";
import "./Profile.scss";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function Profile({ dataType, data }) {
  if (!dataType || dataType.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <SimpleBar style={{ height: "70vh", width: "60vw" }}>
      <div className="c-language-container">
        {data &&
          data.map((language, index) => (
            <Link
              className="u-language"
              to={`/${dataType}/${language.id}`}
              key={index}
            >
              <img
                className="u-language_img"
                src={language.img}
                alt={language.name}
              />
              <h2 className="h2">{language.name}</h2>
            </Link>
          ))}
      </div>
    </SimpleBar>
  );
}
