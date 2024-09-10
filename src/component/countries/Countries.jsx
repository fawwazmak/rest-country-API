import React, { useState } from "react";
import '../../index.css';
import Button from "react-bootstrap/esm/Button";
import { IoArrowBackOutline } from "react-icons/io5";

const Countries = ({ theme, countriesArray, searchedCountry, countryRegion }) => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false)
  }


  return (
    <>
      <div className="mt-5 mb-3">
        <div className="mx-5">
          <div className={`${showDetails == false ? 'row gx-3' : 'd-none'}`}>
            {countriesArray
              .filter((country) => country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())).filter((country) => country.region.toLowerCase().includes(countryRegion.toLowerCase()))
              .map((country, index) => (
                <div className="col-12 col-md-6 col-lg-3 custom-col p-0" onClick={openDetails} key={country.name.common}>
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

          <div className={`${showDetails == true ? 'd-block' : 'd-none'}`}>
            <div className="d-flex gap-3 align-items-center my-3 bg-secondary px-4 py-2" style={{width: "fit-content"}} onClick={closeDetails}>
              <IoArrowBackOutline />
              <p className="m-0">Back</p>
            </div>
            <div>
              <div>
                  {/* <img src={country.flags.svg} alt={`${country.name.common} Flag`} /> */}
              </div>
              <div>
                {/* <h1>{country.name.common}</h1>  alright */}

                <div className="d-flex justify-content-between">
                  <div>
                    <p>Native Name: </p>
                    <p>Population: </p>
                    <p>Region: </p>
                    <p>Sub Region: </p>
                    <p>Capital: </p>
                  </div>


                  <div>
                    <p>Top Level Domain: </p>
                    <p>Currencies: </p>
                    <p>Languages: </p>
                  </div>
                </div>

                <div>
                  <p>Border Countries: </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row bg-danger gx-5">
        <div className="col-4">
          <div className="bg-warning" style={{height: '250px',}}></div>
        </div>

        <div className="col-4 ">
          <div className="bg-success" style={{height: '250px',}}></div>
        </div>

        <div className="col-4 ">
          <div className="bg-danger" style={{height: '250px',}}></div>
        </div>
      </div> */}
    </>
  );
};

export default Countries;
