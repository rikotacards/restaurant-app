import React from 'react'; 
import { MenuItem } from 'components/menuItem/MenuItem'
import './menu-item-container.css'; 

export const MenuItemContainer = (props) => {
    const { 
            handleClick,
            menuItems,
            placeHolderData = [1, 2, 3, 4, 5, 6, 7] } = props; 
    const gridItems = placeHolderData.map((item) => (
        <MenuItem dishName={item} handleClick={handleClick}/>
    ))
    return (
        <div className={`grid-container conditional-columns`}>
            {gridItems}
        </div>
    )
}