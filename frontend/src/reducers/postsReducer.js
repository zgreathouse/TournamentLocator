import { FETCH_POSTS } from '../actions/postActions';

const postsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {

    case FETCH_POSTS:
      return action.payload;

    default:
      return state;
  }
}

export default postsReducer;
