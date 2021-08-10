import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import BeerItem from "../BeerItem";
import { BeerContext } from "../../context/BeerContext";
import { BeerItemProvider } from "../../context/BeerItemContext";

import "./style.css";

const BeerList = () => {
  const { wantedBeer } = useContext(BeerContext);
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => {
        const result = res.data;
        if (result.length) {
          setBeerData(result);
        } else {
          throw new Error("The data is not found.");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BeerItemProvider>
      <div className="beer-list">
        {!wantedBeer
          ? beerData.map((beer) => {
              return <BeerItem key={beer.id} beer={beer}></BeerItem>;
            })
          : beerData
              .filter((beer) =>
                beer.name.toLowerCase().includes(wantedBeer.toLowerCase())
              )
              .map((beer) => <BeerItem key={beer.id} beer={beer}></BeerItem>)}
      </div>
    </BeerItemProvider>
  );
};

export default BeerList;
