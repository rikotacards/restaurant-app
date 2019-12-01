import React from 'react'; 
import './basket.css'; 
import { Card } from 'components/card/Card'
// import { BasketContext } from 'App';

//map list here

const style = {
    position: 'sticky',
    top: '100px'

    
}

export const getTotalBasketPrice = (basketItems) => {
    if(!basketItems.length){
        return 0
    }
    const total =  basketItems.reduce((total, {price}) => total + price, 0)
    console.log('total', total)
    return total
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

    

    const total = getTotalBasketPrice(basketItems)

    return (
        
       <Card style={style}>
           <div className='basket-header'>
               Your Basket
           </div>
           {basketLineItems.length > 0 ? basketLineItems : 'Your basket is empty'}
           {basketLineItems.length > 0 && <p>HK$ {total}</p> }
           <button className='menu-item-button'>Check out</button>
        </Card>
        
        
    )
}