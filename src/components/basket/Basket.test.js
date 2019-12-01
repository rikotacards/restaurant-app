import React from 'react'; 
import { Basket } from './Basket';
import renderer from 'react-test-renderer';

describe('Render Basket', () => {
    it('show Your basket is empty text', () => {
        const testDataEmpty = [];
    const tree = renderer
      .create(<Basket basketItems={testDataEmpty}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    }),

    it('should show one line item', () => {
        const testData = [{price:50}];
        const tree = renderer
          .create(<Basket basketItems={testData}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})



 
  