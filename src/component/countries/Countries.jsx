import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const Countries = ({ theme, countriesArray, searchedCountry, countryRegion }) => {
  return (
    <>
      <div className="mt-5 mb-3">
        <div className="container">
          <div className="row">
            {countriesArray
              .filter((country) => country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())).filter((country) => country.region.toLowerCase().includes(countryRegion.toLowerCase()))
              .map((country, index) => (
                <div
                  key={index}
                  className={`col-12 ge-5 col-md-6 col-lg-3 rounded-3 ${theme === "light" ? "bg-on-light" : "bg-on-dark"}`}
                >
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} Flag`}
                    className="w-100"
                  />
                  <div className="p-3">
                    <h4>{country.name.common}</h4>
                    <p>
                      <span className="fw-bold">Population:</span>{" "}
                      {country.population}
                    </p>
                    <p>
                      <span className="fw-bold">Region:</span> {country.region}
                    </p>
                    <p>
                      <span className="fw-bold">Capital:</span>{" "}
                      {country.capital}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
