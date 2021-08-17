import React, { useContext } from "react";
import { BeerContext } from "../../context/BeerContext";
import "./style.css";

const SearchInput = () => {
  const { wantedBeer, setWantedBeer } = useContext(BeerContext);

  const formChangeHandler = (e) => {
    if (e.key === "Enter") {
      setWantedBeer(e.target.value);
    }
  };

  return (
    <form
      className="d-flex justify-content-center beer-form-search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="form-control"
        type="text"
        name="wantedBeer"
        onKeyDown={formChangeHandler}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchInput;
