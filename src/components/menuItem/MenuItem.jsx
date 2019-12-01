import React from "react";
import './menu-item.css';
import { Card } from 'components/card/Card'

export const MenuItem = props => {
    //To do, pass in props
    const { dishName } = props; 
  return (
   <Card>
       <div className='image'>IMAGE</div>
       <div className='title'>Pad Thai</div>
       <div className='description'> insert desc</div>
       <button className='menu-item-button'>Add to order </button>
    </Card>
  );
};
