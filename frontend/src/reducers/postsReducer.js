import _ from 'lodash';
import { FETCH_POSTS } from '../actions/postActions';

const initialState = {
  entities: {}
}

const postsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {

    case FETCH_POSTS:
      const posts = action.payload;
      const postsObject = {};

      for(let post of posts) {
        postsObject[post._id] = post;
      }

      return _.merge({}, state, { entities: postsObject });

    default:
      return state;
  }
}

export default postsReducer;
