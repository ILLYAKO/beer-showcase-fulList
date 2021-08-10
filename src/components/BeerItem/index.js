import React, {  useState} from "react";
import "./style.css";
import { BeerItemContext } from "../../context/BeerItemContext";

import BeerItemImage from "./BeerItemImage";
import BeerItemDetails from "./BeerItemDetails";

const BeerItem = ({ beer }) => {
  // const { animationCard } = useContext(BeerItemContext);
  const [animationCard, setAnimationCard] = useState(false);

  const [isButtonShown, setIsButtonShown] = useState(false);
  const [textButton, setTextButton] = useState("Show details");
  const [buttonStyle, setButtonStyle] = useState({ visibility: "hidden" });
  const [isAtFirst, setIsAtFirst] = useState(true);

  const buttonTextChange = (text) => {
    if (text === "Hide details") {
      setTextButton("Hide details");
      !isButtonShown && setButtonStyle({ visibility: "hidden" });
    } else {
      setTextButton("Show details");
      setButtonStyle({ visibility: "visible" });
    }
  };

  const onMouseEnterHandler = () => {
    setIsAtFirst(false);
    setButtonStyle(
      isButtonShown && textButton === "Show details"
        ? { visibility: "hidden" }
        : ({ visibility: "visible" }, setIsButtonShown(true))
    );
    buttonTextChange(textButton);
  };

  const onMouseLeaveHandler = () => {
    setIsAtFirst(false);
    setButtonStyle(
      isButtonShown && textButton === "Show details"
        ? // eslint-disable-next-line
          ({ visibility: "hidden" }, setIsButtonShown(false))
        : { visibility: "visible" }
    );
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
        <div className="col-md-4 p-0">
          <BeerItemImage item={beer}></BeerItemImage>
        </div>
        <div className="col-md-8 ">
          <BeerItemDetails
            item={beer}
            isButtonShown={isButtonShown}
            textButton={textButton}
            setTextButton={setTextButton}
            buttonStyle={buttonStyle}
            setButtonStyle={setButtonStyle}
            isAtFirst={isAtFirst}
            setIsAtFirst={setIsAtFirst}
            animationCard={animationCard}
            setAnimationCard={setAnimationCard}
          ></BeerItemDetails>
        </div>
      </div>
    </div>
  );
};

export default BeerItem;
