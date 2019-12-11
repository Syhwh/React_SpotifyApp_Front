import React from 'react';

import { shallow } from 'enzyme';
import { Home } from './';
//describe ('Home')


describe('Home', () => {

    test('render the home component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toBeTruthy();
        const homeComponent = wrapper.find("[data-test='component-home']");
        expect(homeComponent).toHaveLength(1)
    })


})

