/* eslint-disable */

import {AUTHENTICATION} from './../actions/auth';

const initalAuthState = {
  auth: false,
};

const authReducer = (state = initalAuthState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
