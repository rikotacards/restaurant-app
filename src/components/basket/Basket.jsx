import React from 'react'; 
import './basket.css'; 
import { Card } from 'components/card/Card'
//map list here

const style = {
    position: 'sticky',
    top: '100px'
}
export const Basket = (props) => {
    //basket information
    return (
        
       <Card style={style}>
           <button>Check out</button>
        </Card>
        
        
    )
}