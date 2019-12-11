import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './';


describe('Home', () => {
  test('render the home component without errors', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
    const homeComponent = wrapper.find("[data-test='component-home']");
    expect(homeComponent).toHaveLength(1)
  });
});

