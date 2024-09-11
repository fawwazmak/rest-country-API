import React, { useState } from "react";
import '../../index.css';
import Button from "react-bootstrap/esm/Button";
import { IoArrowBackOutline } from "react-icons/io5";

const Countries = ({ theme, countriesArray, searchedCountry, countryRegion }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [clickedCountry, setClickedCountry] = useState(undefined)

  const openDetails = (country) => {
    setShowDetails(true);
    setClickedCountry(country);
    console.log(clickedCountry)
  };

  const closeDetails = () => {
    setShowDetails(false);

  }


  return (
    <>
      <div className="mt-5 mb-3">
        <div className="mx-5">
          {(showDetails === false) && 
          <div className="row gx-3">
            {countriesArray
              .filter((country) => country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())).filter((country) => country.region.toLowerCase().includes(countryRegion.toLowerCase()))
              .map((country, index) => (
                <div className="col-12 col-md-6 col-lg-3 custom-col p-0" onClick={() => openDetails(country)} key={country.name.common}>
                  <div key={index} className={`h-100 p-0 rounded-3 ${theme === "light" ? "bg-on-light" : "bg-on-dark"}`}>
                    <img src={country.flags.svg} alt={`${country.name.common} Flag`} className="w-100 rounded-3 rounded-bottom-0" />
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
          }
            
          {(showDetails === true) &&
          <div>
            <div className="d-flex gap-3 align-items-center my-3 bg-secondary px-4 py-2" style={{width: "fit-content"}} onClick={closeDetails}>
              <IoArrowBackOutline />
              <p className="m-0">Back</p>
            </div>
            <div className="d-flex flex-md-row flex-column justify-content-between">
              <div className="w-50">
                <img src={clickedCountry.flags.svg} alt={`${clickedCountry.name.common} Flag`} className="w-100" />
              </div>
              <div>
                <h1>{clickedCountry.name.common}</h1>

                <div className="d-flex gap-md-5 flex-md-row flex-column">
                  <div>
                    <p>Native Name: {clickedCountry.name.common} </p>
                    <p>Population: {clickedCountry.population.toLocaleString()} </p>
                    <p>Region: {clickedCountry.region} </p>
                    <p>Sub Region: {clickedCountry.subregion}  </p>
                    <p>Capital: {clickedCountry.capital[0]} </p>
                  </div>


                  <div>
                    <p>Top Level Domain: {clickedCountry.altSpellings[0].toLowerCase()} </p>
                    <p>Currencies: {clickedCountry.currencies[Object.keys(clickedCountry.currencies)[0]].name} </p>
                    <p>Languages: {Object.entries(clickedCountry.languages).map(([key, value], index, lang) => (
                      <>
                        <span key={key}>{value}{index < lang.length - 1 && ', '}</span>
                      </>
                    ))} </p>
                  </div>
                </div>

                <div>
                  {/* <p>Border Countries: {clickedCountry.} </p> */}
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default Countries;
