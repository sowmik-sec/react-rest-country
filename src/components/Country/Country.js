import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, name, population, flags } = props.country;
  return (
    <div className="country">
      <h2>{name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
