import React from "react";
import "./single-restaurant.css";
import { RestaurantDescription } from "../../restaurantDescription/RestaurantDescription";
import { MenuItemContainer } from "../../menuItemContainer/MenuItemContainer";
import { Basket } from "../../basket/Basket";
import { PopUpModal } from "components/popUpModal/PopUpModal";
import { RestaurantDataContext } from "components/pages/Restaurant";
import { BasketContext } from "App";

export const SingleRestaurant = props => {
  const [enablePopUp, setPopUp] = React.useState(false);
  const [itemIndex, setItemIndex] = React.useState(0);
  const { items } = React.useContext(BasketContext);

  const { restaurantData } = props;

  const { restaurantDescription, mains, restaurantName } = restaurantData;
  const togglePopUp = index => {
    setPopUp(!enablePopUp);
    setItemIndex(index);
    console.log("itemIndex", itemIndex);
  };
  let menuItemDetails = mains[itemIndex];

  return (
    <>
      <div className={enablePopUp ? "under-modal" : undefined}>
        <div className={`single-restaurant-container`}>
          <div className="restaurant-name-header">
            <h1>{restaurantName}</h1>
          </div>
          <div className="body">
            <div className="main-content-column">
              <div className="description">
                <RestaurantDescription
                  restaurantDescription={restaurantDescription}
                />
              </div>
              <div className="menu-items-grid">
                <MenuItemContainer handleClick={togglePopUp} mains={mains} />
              </div>
            </div>
            <div className="basket-container-column">
              <BasketContext.Consumer>
                {({ items }) => <Basket basketItems={items} />}
              </BasketContext.Consumer>
            </div>
          </div>
        </div>
      </div>
      {enablePopUp && (
        <PopUpModal
          handleCloseModal={togglePopUp}
          menuItemDetails={menuItemDetails}
        />
      )}
    </>
  );
};
