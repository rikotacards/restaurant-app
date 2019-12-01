export const getTotalBasketPrice = (basketItems) => {
    if(!basketItems.length){
        return 0
    }
    const total =  basketItems.reduce((total, {price}) => total + price, 0)
    return total
 }