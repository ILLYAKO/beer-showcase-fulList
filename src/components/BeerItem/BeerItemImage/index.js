import React from 'react'
import "./style.css";

const BeerItemImage = ( {image_url, title} ) => {
  return (
    <div
      className="item-img-card shake-lr"
      style={{
        backgroundImage: "url(" + image_url + ")",
      }}
      title={title}
    ></div>
  );
};

export default BeerItemImage
