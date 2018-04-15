import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS, DELETE_POST } from '../actions/postActions';

const initialState = {
  entities: {},
  selectedPost: {}
}

const postsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {

    case FETCH_POST:
      newState = Object.assign({}, state);
      newState.selectedPost = action.payload;
      return newState;

    case FETCH_POSTS:
      let posts = action.payload;
      let postsObject = {};

      for(let post of posts) {
        postsObject[post._id] = post;
      }

      return _.merge({}, state, { entities: postsObject });

    case DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

export default postsReducer;
