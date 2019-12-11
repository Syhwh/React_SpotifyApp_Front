import { API_GET_NEW_RELEASES } from '../actions/types';
import { getNewReleases } from './apiActions';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import ApiSpotify from '../../utils/ApiSpotify';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const albums = [
  { id: 0, title: 'first title' },
  { id: 1, title: 'second title' }
];

describe('apiActions', () => {
  beforeEach(() => moxios.install(ApiSpotify));
  afterEach(() => moxios.uninstall(ApiSpotify));
  test('should get the last releases ande return an action', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: albums
      });
    })
    store.dispatch(getNewReleases())
      .then(() => {
        console.log('hello wo')
        const actions = store.getActions();
        expect(actions[0].type).toBe(API_GET_NEW_RELEASES);
        expect(actions[0].payload).toMatchObject(albums);
      })

  });
  // it('should request albums', () => {
  //   moxios.stubRequest('/browse/new-releases?limit=20', {
  //     status: 200,
  //     response: albums
  //   });

  //   const store = mockStore();
  //   const dispatch = store.dispatch;

  //   return (
  //     getNewReleases()(dispatch)
  //       .then(() => {
  //         const actions = store.getActions();
  //         // console.log(actions[0].payload[0].title)
  //         expect(actions[0].type).toBe(API_GET_NEW_RELEASES);
  //         expect(actions[0].payload).toMatchObject(albums);
  //       })
  //   );
  // });
});