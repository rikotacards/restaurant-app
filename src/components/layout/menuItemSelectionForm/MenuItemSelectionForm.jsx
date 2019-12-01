import React from "react";
import "./menu-item-selection-form.css";
import { RestaurantDescription } from "components/restaurantDescription/RestaurantDescription";

export const MenuItemSelectionForm = props => {
  //input menu forms
  const placeHolderOptions = {
   "options": [
      {
        "name": "selections",
        "selections": ["selection 1", "selection 2", "selection 3"]
      },
      { "name": "options", "selections": ["Topping 1", "Topping 2", "Topping 3"] }
    ]
  };
  const {items } = props;
  const menuOptions = placeHolderOptions["options"].map(mainOption => {
    const optionName = mainOption["name"];
    const subOptions = mainOption["selections"].map(option => {
      return (
        <div>
          <input type="radio" name={optionName} value={option}/>
            <label for="huey">{option}</label>

        </div>
      );
    });
    return (
      <>
        <div>{optionName}</div>
        {subOptions}
      </>
    );
  });
  console.log("menuop", menuOptions);
  return (
    <div className="menu-item-selection-form">
      <div className="menu-item-title">Food Name</div>
      <div className="menu-item-selection-desc">Descriptions</div>
      {menuOptions}
    </div>
  );
};
