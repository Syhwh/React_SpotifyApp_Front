import { API_GET_NEW_RELEASES } from '../actions/types';

import apiReducer, { initialState } from './apiReducer';

describe('api Reducer', () => {
  test('should return defult state', () => {
    const newState = apiReducer(undefined, {});
    expect(newState).toMatchObject(initialState);
  })



  test('should return a new state if receiveing a type', () => {
    const newReleases = [{ title: 'new album' }, { title: 'new album' }]
    const newState = apiReducer(initialState, {
      type: API_GET_NEW_RELEASES,
      payload: newReleases  });
    expect(newState.newReleases).toEqual(newReleases);
  })
})