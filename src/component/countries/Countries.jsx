import React, { useState } from "react";
import '../../index.css';
import Button from "react-bootstrap/esm/Button";

const Countries = ({ theme, countriesArray, searchedCountry, countryRegion }) => {
  return (
    <>
      <div className="mt-5 mb-3">
        <div className="container">
          <div className="row row-gap-5">
            {countriesArray
              .filter((country) => country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())).filter((country) => country.region.toLowerCase().includes(countryRegion.toLowerCase()))
              .map((country, index) => (
                <div className="col-12 col-md-6 col-lg-3 rounded-2 p-0">
                  <div key={index} className={`h-100 p-0 ${theme === "light" ? "bg-on-light" : "bg-on-dark"}`}>
                    <img src={country.flags.svg} alt={`${country.name.common} Flag`} className="w-100 h-50" />
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
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
