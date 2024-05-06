import React from "react";
import "../../../src/App.scss";

import "./Profile.scss";
import { Link } from "react-router-dom";

export default function Profile({ dataType, data }) {
  if (!dataType || dataType.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <div className="c-language-container">
        {data.map((language, index) => (
          <Link key={index} to={`${language.name}`}>
            <div className="u-language">
              <img src={language.img} alt={language.name} />
              <h2 className="h2">{language.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
