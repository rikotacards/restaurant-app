import React from 'react'; 
import './pop-up-modal.css';

export const PopUpModal = (props) => {
    const { handleCloseModal } = props; 
    // input dish details 
    return (
        <div id='modal' className='menu-item-modal'>
            <button onClick={handleCloseModal}>close</button>
        </div>
    )
}