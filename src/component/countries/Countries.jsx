import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

const Countries = ({ theme }) => {
  const [countriesArray, setcountriesArray] = useState([]);
  const getCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all#")
      .then((res) => {
        // var countriesArray = res.data;
        setcountriesArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const eachCountry = countriesArray.map((country, index) => {
  //   return (
  //     <>
  //       <div class="container row">
  //         <div class="col-3">
  //           <div className={theme === "light" ? "bg-light text-dark" : "bg-dark text-white"}>
  //             <img src={country.flags.svg} alt={`${country.name} flag`} className="w-100" />
  //             <h2>{country.name.common}</h2>
  //             <p><span className="fw-bold">Populaton:</span> {country.population}</p>
  //             <p><span className="fw-bold">Region:</span> {country.region}</p>
  //             <p><span className="fw-bold">Capital:</span> { country.capital}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // });

  return (
    <>
      <div>
        <Button onClick={getCountries}>Click!</Button>

        <div className="container">
          <div className="row">
            {countriesArray.map((country, index) => (
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
                    <span className="fw-bold">Region:</span> {country.region}
                  </p>
                  <p>
                    <span className="fw-bold">Capital:</span> {country.capital}
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
