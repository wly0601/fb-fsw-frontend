import React from "react";

const ItemCard = (props) => {
  const { title, type, price, image, imageAlt } = props;

  return (
    <div className="card" style={{ width: "10rem" }}>
      <img src={image} className="card-img-top" alt={imageAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{type}</p>
        <h5 className="card-title">{price}</h5>
      </div>
    </div>
  )
}

export default ItemCard;