import React from "react";
import './menu-item.css';

export const MenuItem = props => {
  return (
   <div className='container'>
       <div className='title'>Pad Thai</div>
       <hr className='divider'/>
       <div className='image'>IMAGE</div>
       <hr className='divider'/>
       <div className='description'> insert desc</div>
       <button className='menu-item-button'>Add to order </button>
   </div>
  );
};
