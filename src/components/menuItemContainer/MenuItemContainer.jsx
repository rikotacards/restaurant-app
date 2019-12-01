import React from 'react'; 
import { MenuItem } from 'components/menuItem/MenuItem'
import './menu-item-container.css'; 

export const MenuItemContainer = (props) => {
    const { 
            handleClick,
            mains,
            } = props; 

 

    const gridItems = mains.map((item) => (
        <MenuItem singleItem={item} handleClick={handleClick}/>
    ))
    return (
        <div className={`grid-container conditional-columns`}>
            {gridItems}
        </div>
    )

    
    
}