import { FETCH_POSTS } from '../actions/postActions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {

    case FETCH_POSTS:
      const posts = action.payload;
      console.log(posts);

    default:
      return state;
  }
}

export default postsReducer;
