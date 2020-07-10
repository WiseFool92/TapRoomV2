import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from './../../actions/ActionTypes';

describe("formVisibleReducer", () => {

  test('if no action type is recognized, return default state ', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  });

});