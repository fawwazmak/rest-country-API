import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import SearchAndFilterSelect from "../../component/searchAndFilterSelect/SearchAndFilterSelect";
import Countries from "../../component/countries/Countries";

const Homepage = () => {
  let [theme, setTheme] = useState("light");
  let [searchAndFilterSelect, setSearchAndFilterSelect] = useState("Nigeria")

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    console.log(searchAndFilterSelect);
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  console.log()

  return (
    <>
      <div
        className="d-flex flex-sm-row flex-column-reverse justify-content-between align-items-center px-5 py-3"
        style={{ boxShadow: "1px 1px 10px black" }}
      >
        <p className="fw-bolder mt-sm-0 mt-4 ">Where in the world? </p>
        <Button
          className={
            theme === "light" ? "bg-light text-dark " : "bg-dark text-light"
          }
          onClick={toggleTheme}
        >
          {" "}
          {theme === "light" ? (
            <>
              <FaMoon /> Dark
            </>
          ) : (
            <>
              <FaSun /> Light
            </>
          )}{" "}
          Mode
        </Button>
      </div>
      {/* inputValue, setInputValue */}
      <SearchAndFilterSelect theme={theme} inputValue={searchAndFilterSelect} setInputValue={setSearchAndFilterSelect}  />
      <Countries theme={theme} searchedCountry={searchAndFilterSelect} />
    </>
  );
};

export default Homepage;
