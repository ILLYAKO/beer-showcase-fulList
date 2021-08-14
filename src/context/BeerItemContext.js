import React, { createContext, useState } from "react";

export const BeerItemContext = createContext();

export const BeerItemProvider = ({ children }) => {
  const [beerName, setBeerName] = useState("");
  return (
    <BeerItemContext.Provider
      value={{
        beerName,
        setBeerName,
      }}
    >
      {children}
    </BeerItemContext.Provider>
  );
};
