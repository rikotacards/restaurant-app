import React from 'react'; 
import { MenuItem } from './MenuItem';
import renderer from 'react-test-renderer';

describe('Render MenuItem', () => {
    it('should only render div item with image and name', () => {
        const testDataEmpty = {};
    const tree = renderer
      .create(<MenuItem singleItem={testDataEmpty}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    }),

    it('should show one line item', () => {
        const testData = {name: 'Morning glory', price:50};
        const tree = renderer
          .create(<MenuItem singleItem={testData}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})



 
  