import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App/>', () => {
  test(' render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy()
  })

})