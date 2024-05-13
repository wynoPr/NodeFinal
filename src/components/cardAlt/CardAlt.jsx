import React from "react";
import "./cardAlt.scss";
import "../../../src/App.scss";
import { Link } from "react-router-dom";

export default function CardAlt({ arr }) {

  const path = window.location.pathname;

  const esPar = arr.order % 2 === 0;
  const clase = esPar ? "right" : "left";
  const classComb = `cardAlt ${clase}`;
  return (

    <>
      {path.includes("en") && (
        <Link to={"/en/language/" + arr.id} className={classComb}>
          <h4 className="h4">{arr.order}</h4>
          <h4 className="h4">{arr.name}</h4>
          <figure className="cardAlt_figure">
            <img
              src={arr.img}
              alt={"logo de " + arr.name}
              className="cardAlt_img"
            ></img>
          </figure>
        </Link>
      )}
      {path.includes("esp") && (
        <Link to={"/esp/language/" + arr.id} className={classComb}>
          <h4 className="h4">{arr.order}</h4>
          <h4 className="h4">{arr.name}</h4>
          <figure className="cardAlt_figure">
            <img
              src={arr.img}
              alt={"logo de " + arr.name}
              className="cardAlt_img"
            ></img>
          </figure>
        </Link>
      )}
    </>
  );
}
