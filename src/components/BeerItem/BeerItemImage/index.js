import React from 'react'
import "./style.css";

const BeerItemImage = ({item}) => {
    return (
      <div
        className="item-img-card shake-lr"
        style={{
          backgroundImage: "url(" + item.image_url + ")",
        }}
        title={item.name}
      ></div>
    );
}

export default BeerItemImage
