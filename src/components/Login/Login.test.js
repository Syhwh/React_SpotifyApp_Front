import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import UserLoginForm from './UserLoginForm';

const defaultProps = {
  userEmail: ''
}
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<UserLoginForm />)
}

test(' render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'formComponent');
  expect(component.length).toBe(1);

})

test(' render the input', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'formComponent');
  expect(component.length).toBe(1);

})

describe('MyForm', () => {
  const wrapper = mount(<UserLoginForm />);
  test('should update an input when it is changed', () => {
    wrapper.find('input').at(0).simulate('change', {
      persist: () => { },
      target: {
        name: 'userEmail',
        value: 'mock@email.com'
      },
    });
    const newValue = wrapper.find("input").at(0).props().value;
    expect(newValue).toEqual('mock@email.com');

  });
  test('should update the  password when it is changed', () => {
    wrapper.find('input').at(1).simulate('change', {
      persist: () => { },
      target: {
        name: 'userPassword',
        value: 'mypassword'
      },
    });
    const newValue = wrapper.find("input").at(1).props().value;
    expect(newValue).toEqual('mypassword');

    wrapper.unmount();
  });
});
