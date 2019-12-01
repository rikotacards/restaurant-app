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
           {basketLineItems.length > 0 && basketLineItems}
           <button>Check out</button>
        </Card>
        
        
    )
}