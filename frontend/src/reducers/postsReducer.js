import _ from 'lodash';
import { FETCH_POSTS, DELETE_POST } from '../actions/postActions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let posts;
  let postsObject;

  switch(action.type) {

    case FETCH_POSTS:
      posts = action.payload;
      postsObject = {};

      for(let post of posts) {
        postsObject[post._id] = post;
      }

      return postsObject;

    case DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

export default postsReducer;