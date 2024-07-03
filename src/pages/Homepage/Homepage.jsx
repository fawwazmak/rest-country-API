import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { IoMdMoon } from "react-icons/io";
import { GoSun } from "react-icons/go";
import SearchAndFilterSelect from "../../component/searchAndFilterSelect/SearchAndFilterSelect";
import Countries from "../../component/countries/Countries";

const Homepage = () => {
  let [theme, setTheme] = useState("dark");
  const [countriesArray, setcountriesArray] = useState([]);
  const [searchedCountry, setsearchedCountry] = useState(null);
  const [countryRegion, setCountryRegion] = useState("");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center px-md-5 px-2 py-3 ${
          theme === "light" ? "bg-on-light" : "bg-on-dark"
        }`}
      >
        <p className="fw-bold mt-sm-0">Where in the world? </p>
        <p
          className={`d-flex align-items-center gap-1 ${
            theme === "light" ? "bg-on-light" : "bg-on-dark"
          }`}
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <>
              <IoMdMoon /> Dark
            </>
          ) : (
            <>
              <GoSun /> Light
            </>
          )}{" "}
          Mode
        </p>
      </div>

      <SearchAndFilterSelect
        theme={theme}
        countriesArray={countriesArray}
        setcountriesArray={setcountriesArray}
        searchedCountry={searchedCountry}
        setsearchedCountry={setsearchedCountry}
        countryRegion={countryRegion}
        setCountryRegion={setCountryRegion}
      />

      <Countries
        theme={theme}
        countriesArray={countriesArray}
        searchedCountry={searchedCountry}
        countryRegion={countryRegion}
      />
    </>
  );
};

export default Homepage;
