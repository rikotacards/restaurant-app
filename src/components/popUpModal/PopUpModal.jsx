import React from "react";
import "./pop-up-modal.css";
import { MenuItemSelectionForm } from "components/layout/menuItemSelectionForm/MenuItemSelectionForm";

export const PopUpModal = props => {
  const { handleCloseModal, menuItemDetails } = props;
  // input dish details
  return (
    <div id="modal" className="menu-item-modal">
      <MenuItemSelectionForm menuItemDetails={menuItemDetails} />
      <button className="menu-item-button" onClick={handleCloseModal}>
        close
      </button>
    </div>
  );
};
