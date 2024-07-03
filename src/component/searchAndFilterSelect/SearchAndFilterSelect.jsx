import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

const SearchAndFilterSelect = ({
  theme,
  countriesArray,
  setcountriesArray,
  searchedCountry,
  setsearchedCountry,
  setCountryRegion,
  countryRegion,
}) => {
  const changeCountryValue = (e) => {
    setsearchedCountry(e.target.value);
    axios
      .get("https://restcountries.com/v3.1/all#")
      .then((res) => {
        setcountriesArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeRegion = (event) => {
    setCountryRegion(event.target.value);
  };
  return (
    <>
      <div className="d-flex justify-content-between mt-3 flex-sm-row flex-column px-md-5 px-2 gap-3 py-2">
        <div
          className={`rounded-1 p-2 d-flex align-items-center gap-2 ${
            theme === "light" ? "bg-on-light" : "bg-on-dark"
          }`}
        >
          <CiSearch />
          <input
            type="text"
            onChange={changeCountryValue}
            placeholder="Search for a country"
            className={`w-100 ${
              theme === "light" ? "bg-on-light" : "bg-on-dark"
            }`}
          />
        </div>

        <Form.Select
          size="sm"
          value={countryRegion}
          onChange={changeRegion}
          className={`fw-bolder ${
            theme === "light" ? "bg-on-light" : "bg-on-dark"
          }`}
          style={{ width: "180px" }}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Form.Select>
      </div>
    </>
  );
};

export default SearchAndFilterSelect;
