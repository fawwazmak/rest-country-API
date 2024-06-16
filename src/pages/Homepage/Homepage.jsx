import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import SearchAndFilterSelect from "../../component/searchAndFilterSelect/SearchAndFilterSelect";
import Countries from "../../component/countries/Countries";

const Homepage = () => {
  let [theme, setTheme] = useState("light");

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
      <SearchAndFilterSelect theme={theme} />
      <Countries theme={theme} />
    </>
  );
};

export default Homepage;
