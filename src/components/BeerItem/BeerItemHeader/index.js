import React from "react";
import "./style.css";

const BeerItemHeader = ({
  item,
  onClickHandler,
  isButtonShown,
  textButton,
  isAtFirst,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default BeerItemHeader;
