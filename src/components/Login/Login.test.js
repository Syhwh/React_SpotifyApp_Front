import React from 'react';
import { shallow } from 'enzyme';
// import { render, fireEvent } from '@testing-library/react';
// import { getByPlaceholderText } from '@testing-library/dom'
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
  //console.log(component.props())
})

test(' render the input', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'formComponent');
  expect(component.length).toBe(1);
  /// console.log(component.props())
  console.log(component)
})

describe('MyForm', () => {


  test('should update an input when it is changed', () => {

    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'formComponent');
    //const tree = shallow(<MyForm />);

    // tree.find(MyInnerForm).dive().find('input').simulate('change', {
    //   // you must add this next line as (Formik calls e.persist() internally)
    //   persist: () => { },
    //   // simulate changing e.target.name and e.target.value
    //   target: {
    //     name: 'name',
    //     value: 'ian',
    //   },
    // });

    // wrapper.find("[data-test='formComponent']").dive().find("[data-test='inputEmailComponent']").simulate('change', {
    //   persist: () => { },
    //   // simulate changing e.target.name and e.target.value
    //   target: {
    //     name: 'userEmail',
    //     value: 'mock@email.com',
    //   },
    // });

    // const newValue = wrapper.find("[data-test='formComponent']").dive().find("[data-test='inputEmailComponent']").props();
    const newValue = wrapper.find("[data-test='formComponent']").dive().find("[data-test='inputEmailComponent']").prop('value', {
      target: {
        value: 'mock@email.com',
      }
    });

    console.log(newValue)


    expect(newValue).toEqual('mock@email.com');
  });
})
// describe('User Login Form', () => {

  // test('render the home component', () => {
  //   const wrapper = shallow(<UserLoginForm />);
  //   expect(wrapper).toBeTruthy();
  //   console.log(wrapper.find('[data-test="component-form"]'))
  // const homeComponent = wrapper.find("[data-test='component-home']");
  // expect(homeComponent).toHaveLength(1)
// })
  // const setup = () => {
  //     const utils = render(<UserLoginForm />)
  //     const givenEmailInput = utils.getByLabelText('Email')
  //     return {
  //       givenEmailInput,
  //         ...utils,
  //     }
  // }

  // test('Form with valid entry', async () => {
  //     const { givenEmailInput } = setup()
  //     // const givenEmailInput = getByPlaceholderText('Email');
  //     fireEvent.change(givenEmailInput, { target: { name: 'userEmail', value: 'mock@email.com' } });
  //     expect(givenEmailInput.value).toBe('mock@email.com');
  //     await wait(() => {
  //         expect(submitButton).toBeDisabled();
  //     });
  // });
  // it('Should capture firstname correctly onChange', function () {
  //     const wrapper = shallow(<UserLoginForm />);
  //     const input = wrapper.find('input').at(0);
  //     input.instance().value = 'hello';
  //     input.simulate('change');
  //     expect(component.state().firstname).toEqual('hello');
  // })

  // test("submits correct values", async () => {
  //     const { container } = render(<UserLoginForm />)
  //     const email = container.querySelector('input[name="userEmail"]')
  //     const password = container.querySelector('input[name="userPassword"]')
  //     const submit = container.querySelector('button[type="submit"]')

  //     await waitForElement(() => {
  //         fireEvent.change(email, {
  //             target: {
  //                 value: "mock@email.com"
  //             }
  //         })
  //     })
  //     await waitForElement(() => {
  //         fireEvent.change(password, {
  //             target: {
  //                 value: "mockPassword"
  //             }
  //         })
  //     })

  //     await waitForElement(() => {
  //         fireEvent.click(submit)
  //     })

  //     expect(results.innerHTML).toBe(
  //         '{"userEmail":"mock@email.com","userPassword":"mockPassword"}'

  //     )
  // })
// })
