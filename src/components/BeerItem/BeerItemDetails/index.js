import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import ItemAccordion from "./ItemAccordion";

const BeerItemDetails = ({ item, isDetailShown, detailTextStyle }) => {
  if (!item) {
    return null;
  }

  const isDouleNameValue = (text) =>
    process.env.REACT_APP_DOUBLE_NAME.split(",").includes(text);

  const showBeerDetails = (itemName, itemInner) => {
    if (typeof itemInner === "number" || typeof itemInner === "string") {
      return (
        <li key={uuidv4()}>
          <span className={"beer-descripttion-bold"}>
            {itemName.replace("_", " ")}
          </span>
          : <span className="beer-descripttion"> {itemInner}</span>
        </li>
      );
    }

    if (isDouleNameValue(itemName)) {
      return (
        <li key={uuidv4()}>
          <span className={"beer-descripttion-bold"}>
            {itemName.replace("_", " ")}
          </span>
          :{" "}
          <span className="beer-descripttion">
            {itemInner["value"]}
            {itemInner["unit"]}
          </span>
        </li>
      );
    }

    return (
      <li key={uuidv4()} className="beer-itemaccordion">
        <ItemAccordion
          key={uuidv4()}
          itemName={itemName}
          itemAccordion={itemInner}
        ></ItemAccordion>
      </li>
    );
  };

  return (
    <ul
      style={detailTextStyle}
      className={
        isDetailShown
          ? "card-text mt-2 beer-det-text-fade-in"
          : "card-text mt-2 beer-det-text-fade-out"
      }
    >
      {Object.keys(item).length && isDetailShown
        ? Object.keys(item).map((itemKey) => {
            return showBeerDetails(itemKey, item[itemKey]);
          })
        : "No data"}
    </ul>
  );
};

export default BeerItemDetails;
