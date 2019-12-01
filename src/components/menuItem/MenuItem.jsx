import React from "react";
import "./menu-item.css";
import { Card } from "components/card/Card";

export const MenuItem = props => {
  const { singleItem = { name: "No Item" }, handleClick } = props;

  return (
    <Card>
      <div className="image">IMAGE</div>
      <div className="title-price-container">
        <h5 className="item-title">{singleItem.name}</h5>
        <h5 className="item-price">{singleItem.price}</h5>
      </div>
      <div className="description">{singleItem.description}</div>
      <button onClick={handleClick} className="menu-item-button">
        Add to order
      </button>
    </Card>
  );
};
