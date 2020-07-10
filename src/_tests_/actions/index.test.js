import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tap actions', () => {
  it('deleteTap creates DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: c.DELETE_TAP,
      id: 1
    });
  });

  it('toggleForm creates TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addTap creates ADD_TAP action', () => {
    expect(actions.addTap({name: 'kool & krispy', brand: 'weiser', price: '5', alcoholContent: "80", pints: "5", id: 1})).toEqual({
      type: c.ADD_TAP,
      name: 'kool & krispy',
      brand: 'weiser',
      price: '5',
      alcoholContent: "80",
      pints: "5",
      id: 1
    });
  });

});