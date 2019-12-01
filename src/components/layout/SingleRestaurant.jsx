import React from "react";
import "./single-restaurant.css";
import { RestaurantDescription } from "../restaurantDescription/RestaurantDescription";
import { MenuItemContainer } from "../menuItemContainer/MenuItemContainer";
import { Basket } from "../basket/Basket";

export const SingleRestaurant = props => {
  return (
    <div className="single-restaurant-container">
      <div className='restaurant-name-header'>
        <h1>Soul Food</h1>
      </div>
      <div className='body'>
      <div className="main-content-column">
        <div className="description">
          <RestaurantDescription />
        </div>
        <div className="menu-items-grid">
          <MenuItemContainer />
        </div>
        
      </div>
      <div className="basket-container-column">
        <Basket />
      </div>
      </div>
    </div>
  );
};
