import React from "react";
import "./basket.css";
import { Card } from "components/card/Card";
import { getTotalBasketPrice } from "../../util/getTotalBasketPrice";

const style = {
  position: "sticky",
  top: "100px"
};

export const Basket = props => {
  const { basketItems } = props;
const disableButton = basketItems.length === 0; 
  const basketLineItems = basketItems.map((item, index) => {
    const { quantity, name, price, options, selections } = item;
    return (
      <div className="basket-line-item" key={name+index}>
        <p>
          {quantity} x {name} HK${price} <br />({options}, {selections})
        </p>
      </div>
    );
  });

  const total = getTotalBasketPrice(basketItems);

  return (
    <Card style={style}>
      <div className="basket-header">Your Basket</div>
      {basketLineItems.length > 0 ? basketLineItems : "Your basket is empty"}
      {basketLineItems.length > 0 && <p>HK$ {total}</p>}
      <button disabled={disableButton} className="menu-item-button">Check out</button>
    </Card>
  );
};
