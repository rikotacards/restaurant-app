
import {testData } from '../testResources/testData'
import { getTotalBasketPrice } from './getTotalBasketPrice';

describe('getTotalBasketPrice', ()=> {
    it('should return zero if no items in basket', () => {
        expect(getTotalBasketPrice([])).toEqual(0)
    }); 
    it('should return 1160 for all items', () => {
        expect(getTotalBasketPrice(testData.soul_food.mains)).toEqual(1160)
    })
})