import React from "react";
import "./single-restaurant.css";
import { RestaurantDescription } from "../../restaurantDescription/RestaurantDescription";
import { MenuItemContainer } from "../../menuItemContainer/MenuItemContainer";
import { Basket } from "../../basket/Basket";
import { PopUpModal } from "components/popUpModal/PopUpModal";

export const SingleRestaurant = props => {
  const [enablePopUp, setPopUp ] = React.useState(false);
  const { restaurantData } = props; 


  const { restaurantDescription, mains, restaurantName } = restaurantData;
  const togglePopUp = () => {
    setPopUp(!enablePopUp);
  }

  return (
    <>
    <div className={enablePopUp && 'under-modal'}>
    <div className={`single-restaurant-container`}>
      <div className='restaurant-name-header'>
        <h1>{restaurantName}</h1>
      </div>
      <div className='body'>
      <div className="main-content-column">
        <div className="description">
          <RestaurantDescription restaurantDescription={restaurantDescription}/>
        </div>
        <div className="menu-items-grid">
          <MenuItemContainer handleClick={togglePopUp} mains={mains}/>
        </div>
        
      </div>
      <div className="basket-container-column">
        <Basket />
      </div>
      </div>
    </div>
    </div>
    {enablePopUp && <PopUpModal handleCloseModal={togglePopUp}/>}
   </>
  );
};
