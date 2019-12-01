import React from 'react'; 
import './basket.css'; 
import { Card } from 'components/card/Card'
//map list here

const style = {
    position: 'sticky',
    top: '100px'
}
export const Basket = (props) => {

    const { basketItems } = props;
   

    const basketLineItems = basketItems.map((item) => {
        const {quantity, name, price, options, selections } = item;
        return (
            <div className='basket-line-item'>
                <p>{quantity} x {name} HK${price} <br/>
                ({options}, {selections})
                </p>
            </div>
        )
    })

    return (
        
       <Card style={style}>
           <div className='basket-header'>
               Your Basket
           </div>
           {basketLineItems.length > 0 ? basketLineItems : 'Your basket is empty'}
           <button>Check out</button>
        </Card>
        
        
    )
}