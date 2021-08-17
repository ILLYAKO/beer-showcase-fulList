import { useState } from "react";

import { render, screen } from "@testing-library/react";
import SearchForm from "../SearchForm";
import { BeerContext } from "../../context/BeerContext";



test("renders Search", () => {
  const [wantedBeer, setWantedBeer] = useState("");

  render(
    <BeerContext.Provider value={{ wantedBeer, setWantedBeer }}>
      <SearchForm />
      {/* <BeerList></BeerList> */}
    </BeerContext.Provider>
  );
  const serchElement = screen.getByText("Search");
  expect(serchElement).toBeInTheDocument();
});
