import React from 'react'; 
import './restaurant-description.css';

export const RestaurantDescription = (props) => {
    const {restaurantDescription } = props;
    return (
        <div className='decription-container'>
            <p>{restaurantDescription}</p>
        </div>
    )
}