import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pints, id } = action;

  switch (action.type) {

    case c.ADD_TAP:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pints: pints,
          id: id,
        },
      });

    case c.DELETE_TAP:
      const newState = { ...state };
      delete newState[id];
      return newState;

    case c.SELL_PINT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pints: pints - 1,
          id: id
        }
      });

    default:
      return state;
  }
};
