import React from "react";
import Form from "react-bootstrap/Form";
import { CiSearch } from "react-icons/ci";

const SearchAndFilterSelect = ({ theme, inputValue, setInputValue}) => {
  // const searchedCntry = () => {
    const changeValue = (e) => {
      setInputValue(e.target.value)
    }
  // } 
  return (
    <>
      <div className="d-flex justify-content-between mt-3 flex-sm-row flex-column">
        <div
          className={
            theme === "light"
              ? "bg-white text-dark rounded-1"
              : "bg-dark text-light rounded-1"
          }
        >
          <CiSearch />
          <input type="text" value={inputValue} placeholder="Search for a country" className={theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}
          />
        </div>

        <Form.Select size="sm" className="fw-bolder" style={{ width: "180px" }}>
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </Form.Select>
      </div>
    </>
  );
};

export default SearchAndFilterSelect;
