import React from "react";

export default function Searchbar() {
  return (
    <>
      <div className="container d-flex justify-content-start align-items-center mb-2 mt-4">
        <form className="d-flex w-100 " role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search inventories..."
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
