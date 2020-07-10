import tapListReducer from "../../reducers/tap-list-reducer";
import * as c from './../../actions/ActionTypes';

let action;

const tapData = {
  name: 'Kool & Krispy',
  brand: 'Weiser',
  price: '5',
  alcoholContent: "80",
  pints: "5",
  id: 1
};

const updatedTapData = {
  name: 'Kool & Krispy',
  brand: 'Weiser',
  price: '5',
  alcoholContent: "80",
  pints: "5",
  id: 1
};

const currentState = {
  1: {
    name: 'Kool & Krispy',
    brand: 'Weiser',
    price: '5',
    alcoholContent: "80",
    pints: "5",
    id: 1
  },
  2: {
    name: 'Whiff in the Wind',
    brand: 'WetDoge',
    price: '8',
    alcoholContent: "160",
    pints: "155",
    id: 2
  },
};

describe("tapListReducer", () => {
  test("add new tap data to masterTapList", () => {
    const { name, brand, price, alcoholContent, pints, id } = tapData;
    action = {
      type: c.ADD_TAP,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: 1
    };

    expect(tapListReducer({}, action)).toEqual({
      1: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id,
      },
    });
  });

  test("Should update tap data if key already exists using the same ADD_TAP Reducer", () => {
    const { name, brand, price, alcoholContent, pints, id } = updatedTapData;
    action = {
      type: c.ADD_TAP,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id,
    };

    expect(tapListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id,
      },
    });
  });

  test("delete a tap", () => {
    action = {
      type: c.DELETE_TAP,
      id: 1,
    };
    expect(tapListReducer(currentState, action)).toEqual({
      2: {
        name: 'Whiff in the Wind',
        brand: 'WetDoge',
        price: '8',
        alcoholContent: "160",
        pints: "155",
        id: 2
      },
    });
  });

  test("if there is no action type passed into the reducer, return default state", () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });
});