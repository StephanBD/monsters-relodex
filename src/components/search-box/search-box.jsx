import React from "react";
import "./search-box.css";

//-------------------SearchBox----------------------------------//
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

// e => this.setState({ searchField: e.target.value }, () =>
//   console.log(this.state)
// )
