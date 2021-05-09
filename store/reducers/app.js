/* eslint-disable */

import {THEME_TOGGLE} from './../actions/app';

const initalAppState = {
  dark: false,
};

const appReducer = (state = initalAppState, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return {
        ...state,
        dark: action.data,
      };
    default:
      return state;
  }
};

export default appReducer;
