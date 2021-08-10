import React, { createContext, useState } from "react";

export const BeerItemContext = createContext();

export const BeerItemProvider = ({ children }) => {
  const [beerName, setBeerName] = useState("");
  const [animationCard, setAnimationCard] = useState(false);
  
  return (
    <BeerItemContext.Provider
      value={{
        beerName,
        setBeerName,
        animationCard,
        setAnimationCard,
      }}
    >
      {children}
    </BeerItemContext.Provider>
  );
};
