import React from "react";
import "./menu-item-selection-form.css";
import { BasketContext } from "App";

export const MenuItemSelectionForm = props => {
  const { handleUpdate } = React.useContext(BasketContext);
  const [disableAddToCart, setAddToCart] = React.useState(false);
  const [formState, setInput] = React.useState({ quantity: "1" });
  const setFormState = event => {
    formState[event.target.name] = event.target.value;
    setInput(formState);
  };
  const itemQuantity = 10;
  const selectionQuanity = () => {
    const selectionItems = [];
    for (let i = 1; i <= itemQuantity; i++) {
      selectionItems.push(<option>{i}</option>);
    }
    return selectionItems;
  };

  const addToCart = () => {
    if (formState.quantity < 0 || !formState.selections || !formState.options) {
      return;
    }
    const itemOrder = {
      name: menuItemDetails.name,
      price: menuItemDetails.price * Number(formState.quantity),
      ...formState
    };
    handleUpdate(itemOrder);
    setAddToCart(true);
  };
  const { menuItemDetails } = props;
  const menuOptions = menuItemDetails["options"].map(mainOption => {
    const optionName = mainOption["name"];
    const isMultipleSelection = optionName === "options";
    const subOptions = mainOption["selections"].map(option => {
      return (
        <div>
          <input
            type={isMultipleSelection ? "checkbox" : "radio"}
            name={optionName}
            value={option}
            onChange={setFormState}
          />
          <label for={option}>{option}</label>
        </div>
      );
    });
    return (
      <div className="selections-container">
        <div>{optionName}</div>
        {subOptions}
      </div>
    );
  });
  return (
    <>
      <div className="menu-item-selection-form">
        <div className="menu-item-selection-img">{menuItemDetails.image}</div>
        <div className="item-title">
          <h5>{menuItemDetails.name}</h5>
        </div>
        <div className="menu-item-selection-desc">
          <p>{menuItemDetails.description}</p>
        </div>
        <select className="quantity" name="quantity" onChange={setFormState}>
          {selectionQuanity()}
        </select>
        {menuOptions}
      </div>
      <button
        onClick={addToCart}
        disabled={disableAddToCart}
        className="menu-item-button"
      >
        {" "}
        {disableAddToCart ? "Item Added!" : "Add to cart"}
      </button>
    </>
  );
};
