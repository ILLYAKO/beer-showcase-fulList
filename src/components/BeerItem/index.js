import React, { useState } from "react";
import "./style.css";
import BeerItemImage from "./BeerItemImage";
import BeerItemDetails from "./BeerItemDetails";
import BeerItemHeader from "./BeerItemHeader";

const BeerItem = ({ beer }) => {
  const [animationCard, setAnimationCard] = useState(false);

  const [isButtonShown, setIsButtonShown] = useState(false);
  const [textButton, setTextButton] = useState("Show details");
  const [isAtFirst, setIsAtFirst] = useState(true);
  const [detailTextStyle, setDetailTextStyle] = useState({
    display: "none",
    visibility: "hidden",
  });

  const [isDetailShown, setIsDetailShown] = useState(false);
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
  };

  const buttonTextChange = (text) => {
    if (text === "Hide details") {
      setTextButton("Hide details");
    } else {
      setTextButton("Show details");
    }
  };

  const onMouseEnterHandler = () => {
    setIsAtFirst(false);
    if (!isButtonShown || textButton !== "Show details") {
      setIsButtonShown(true);
    }
    buttonTextChange(textButton);
  };

  const onMouseLeaveHandler = (e) => {
    setIsAtFirst(false);
    if (isButtonShown && textButton === "Show details") {
      setIsButtonShown(false);
    }

    buttonTextChange(textButton);
  };

  return (
    <div
      className={
        isAtFirst
          ? "card"
          : animationCard
          ? "card beer-card-item-zoomed-in"
          : "card beer-card-item-zoomed-out"
      }
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div
        className="row mx-0
      beer-row-item
      "
      >
        <div className="col-md-4 p-0 ">
          <BeerItemImage
            image_url={beer.image_url}
            title={beer.name}
          ></BeerItemImage>
        </div>
        <div className="col-md-8 card-body beer-card-right">
          <BeerItemHeader
            item={beer}
            onClickHandler={onClickHandler}
            isButtonShown={isButtonShown}
            textButton={textButton}
            isAtFirst={isAtFirst}
          ></BeerItemHeader>
          <BeerItemDetails
            item={beer}
            isDetailShown={isDetailShown}
            detailTextStyle={detailTextStyle}
          ></BeerItemDetails>
        </div>
      </div>
    </div>
  );
};

export default BeerItem;
