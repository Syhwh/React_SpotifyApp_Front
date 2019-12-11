import { API_GET_NEW_RELEASES } from '../actions/types';
import { getNewReleases } from './apiActions';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import ApiSpotify from '../../utils/ApiSpotify';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const albums = {
  albums: {
    items: [
      { id: 0, title: 'first title' },
      { id: 1, title: 'second title' }
    ]
  }
};

describe('apiActions', () => {
  beforeEach(() => moxios.install(ApiSpotify));

  afterEach(() => moxios.uninstall(ApiSpotify));
  it('should request albums', () => {
    moxios.stubRequest('/browse/new-releases?limit=20', {
      status: 200,
      response: albums
    });
    const store = mockStore();
    const dispatch = store.dispatch;
    return (
      getNewReleases()(dispatch)
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toBe(API_GET_NEW_RELEASES);
          expect(actions[0].payload).toMatchObject(albums.albums.items);
        }).catch(err => console.log(err))
    );
  });
});