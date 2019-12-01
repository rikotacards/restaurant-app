import React from "react";
import "./menu-item.css";
import { Card } from "components/card/Card";

export const MenuItem = props => {
  //To do, pass in props
  const { singleItem = { name: "No Item" }, handleClick } = props;

  return (
    <Card>
      <div className="image">IMAGE</div>
      <div className="title">{singleItem.name}</div>
      <div className='item-price'>{singleItem.price}</div>
      <div className="description">{singleItem.description}</div>
      <button onClick={handleClick} className="menu-item-button">
        Add to order
      </button>
    </Card>
  );
};
