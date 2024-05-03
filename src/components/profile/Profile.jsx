import React from "react";
import "../../../src/App.scss";

import "./Profile.scss";
import { Link } from "react-router-dom";

export default function Profile({ languages }) {
  return (
    <div>
      <p>blu profile</p>
      <div key={languages.index} className="c-language-container">
        {languages.map((language, index) => (
          <Link to={"/languages/" + language.id}>
            <div key={index} className="u-language">
              <img src={language.img} alt={language.name} />
              <h2 className="h2">{language.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
