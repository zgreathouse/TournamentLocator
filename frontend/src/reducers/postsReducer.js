import _ from 'lodash';
import {
  FETCH_POST,
  FETCH_POSTS,
  UPDATE_POST,
  DELETE_POST
} from '../actions/postActions';

const initialState = { entities: {}, selectedPost: {} }

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

      for (let post of posts) {
        postsObject[post._id] = post;
      }

      return _.merge({}, { entities: postsObject }, newState);

    case UPDATE_POST:
      const post = action.payload;

      newState = Object.assign({}, state);
      newState.selectedPost = post;
      newState.entities[post._id] = post;

      return newState;

    case DELETE_POST:
      newState = {
        entities: _.omit(state.entities, action.payload),
        selectePost: {}
      };

      return newState

    default:
      return state;
  }
}

export default postsReducer;
