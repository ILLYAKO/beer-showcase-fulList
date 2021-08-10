import React, { createContext, useState } from "react";

export const BeerContext = createContext();

export const BeerProvider = ({ children }) => {
  const [wantedBeer, setWantedBeer] = useState("");
  return (
    <BeerContext.Provider
      value={{
        setWantedBeer,
        wantedBeer,
      }}
    >
      {children}
    </BeerContext.Provider>
  );
};
