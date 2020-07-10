import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tapListReducer from '../../reducers/tap-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('match initial state of tapListReducer with root reducer', () => {
    const action = {
      type: c.ADD_TAP,
      name: 'Kool & Krispy',
      brand: 'Weiser',
      price: '5',
      alcoholContent: "80",
      pints: "5",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, action));
  });
  
  test('match initial state of formVisibleReducer with root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('if no action type is recognized, return default state', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: {},
      formVisibleOnPage: false
    });
  });

});