import _ from 'lodash';

import { FETCH_POSTS } from '../actions/postActions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {

    case FETCH_TOURNAMENTS:

    default:
      return state;
  }
}

export default postsReducer;
