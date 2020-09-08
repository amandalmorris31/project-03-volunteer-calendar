import React from "react";
import styled from "styled-components";

const Searchbar = styled.div`
  .btn-outline-success,
  .btn-outline-success:hover {
    border-color: var(--primary-color) !important;
    color: var(--primary-color) !important;
    background-color: white !important;
  }
`;

function Search({ handleInputChange }) {
  return (
    <Searchbar>
      <div className="columns is-centered mt-5">
        <div className="column is-two-thirds">
          <form className="form-inline input-group p-2 searchbar">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-success ml-2"
              type="submit"
              //   onClick={handleInputChange}
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </Searchbar>
  );
}

export default Search;
