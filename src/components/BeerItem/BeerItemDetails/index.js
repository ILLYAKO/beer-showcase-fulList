import React, { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const BeerItemDetails = ({
  item,
  isButtonShown,
  textButton,
  setTextButton,
  isAtFirst,
  animationCard,
  setAnimationCard,
}) => {
  const [isDetailShown, setIsDetailShown] = useState(false);

  const [detailTextStyle, setDetailTextStyle] = useState({
    display: "none",
    visibility: "hidden",
  });

  const isDouleNameValue = (text) => {
    return ["volume", "boil_volume", "temp", "amount", "yeast"].includes(text);
  };

  const onClickHandler = () => {
    setIsDetailShown(!isDetailShown);
    setAnimationCard(!animationCard);
    setTextButton(
      textButton === "Show details" ? "Hide details" : "Show details"
    );
    setDetailTextStyle(
      detailTextStyle.display === "none"
        ? { display: "block", visibility: "visible" }
        : { display: "none" }
    );
    // return null;
  };

  const toggleOpen = (eventMenu) => {
    const lineObj = eventMenu.target.nextSibling;
    console.log(eventMenu)
    if (lineObj.className === "dropdown-menu") {
      lineObj.style.position = "relative";
      lineObj.className = "dropdown-menu show";
    } else {
      lineObj.className = "dropdown-menu";
    }
  };

  const isMultiLineDetail = (itemObj, itemKey) => {
    return typeof itemObj === "object" && !isDouleNameValue(itemKey);
  };

  const showBeerDetails = (itemInner, itemName = undefined) => {
    if (!itemInner) {
      return null;
    }

    if (isDouleNameValue(itemName)) {
      return (
        <span className="beer-descripttion">
          {itemInner.value} {itemInner.unit}
        </span>
      );
    }

    return (
      <ul className={itemName ? "dropdown-menu" : undefined}>
        {Object.keys(itemInner).map((itemKey) => {
          return (
            <React.Fragment key={uuidv4()}>
              {isMultiLineDetail(
                itemInner[itemKey] ? itemInner[itemKey] : "No data",
                itemKey
              ) ? (
                <li className="dropdown-submenu">
                  <span
                    className="dropdown-toggle beer-descripttion-bold "
                    onClick={toggleOpen}
                  >
                    {typeof itemKey === "number"
                      ? console.log(itemKey + 1)
                      : itemKey.replace("_", " ")}
                    :
                  </span>
                  {typeof itemInner[itemKey] === "string" ||
                  typeof itemInner[itemKey] === "number" ? (
                    <span className="beer-descripttion">
                      {itemInner[itemKey]}
                    </span>
                  ) : (
                    showBeerDetails(itemInner[itemKey], itemKey, true)
                  )}
                </li>
              ) : (
                <li>
                  <span className={"beer-descripttion-bold"}>
                    {itemKey.replace("_", " ")}:
                  </span>
                  {typeof itemInner[itemKey] === "string" ||
                  typeof itemInner[itemKey] === "number" ? (
                    <span className="beer-descripttion">
                      {itemInner[itemKey]}
                    </span>
                  ) : (
                    showBeerDetails(itemInner[itemKey], itemKey, true)
                  )}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="card-body beer-card-right">
      <h2>{item.name}</h2>
      <h3>{item.tagline}</h3>
      <button
        style={isAtFirst ? { visibility: "hidden" } : undefined}
        className={
          isButtonShown
            ? "btn beer-btn beer-btn-animation-fade-in jello-horizontal"
            : "btn beer-btn beer-btn-animation-fade-out"
        }
        onClick={onClickHandler}
      >
        {textButton}
      </button>
      <div
        style={detailTextStyle}
        className={
          isDetailShown
            ? "card-text mt-2 beer-det-text-fade-in"
            : "card-text mt-2 beer-det-text-fade-out"
        }
      >
        {Object.keys(item).length && isDetailShown
          ? showBeerDetails(item)
          : "No data"}
      </div>
    </div>
  );
};

export default BeerItemDetails;
