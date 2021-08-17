import React, { useState } from "react";

import "./App.css";
import SearchForm from "./components/SearchForm";
import BeerList from "./components/BeerList";
import { BeerContext } from "./context/BeerContext";

function App() {
  const [wantedBeer, setWantedBeer] = useState("");

  return (
    <div className="App container">
      <div className="d-flex justify-content-center beer-store-title">
        <h1>Beer Factory</h1>
      </div>
      <BeerContext.Provider value={{ wantedBeer, setWantedBeer }}>
        <SearchForm></SearchForm>
        <BeerList></BeerList>
      </BeerContext.Provider>
    </div>
  );
}

export default App;
