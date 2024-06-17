import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

const Countries = ({ theme, searchedCountry }) => {
  const [countriesArray, setcountriesArray] = useState([]);
  const getCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all#")
      .then((res) => {
        setcountriesArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Button onClick={getCountries}>Click!</Button>

        <div className="container">
          <div className="row">
            {countriesArray
              .filter((country) =>
                country.name.common
                  .toLowerCase()
                  .includes(searchedCountry.toLowerCase())
              )
              .map(
                (country, index) =>
                    <div
                      key={index}
                      className={`col-12 ge-5 col-md-6 col-lg-3 rounded-3 ${
                        theme === "light"
                          ? "bg-light text-dark"
                          : "bg-dark text-white"
                      }`}
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
                          <span className="fw-bold">Region:</span>{" "}
                          {country.region}
                        </p>
                        <p>
                          <span className="fw-bold">Capital:</span>{" "}
                          {country.capital}
                        </p>
                      </div>
                    </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
