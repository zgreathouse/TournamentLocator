import _ from 'lodash';
import {
  FETCH_COMMENT,
  FETCH_COMMENTS,
  DELETE_COMMENT
} from '../actions/commentActions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCH_COMMENT:
      return { ...state, [action.payload._id]: action.payload };

    case FETCH_COMMENTS:
      let comments = action.payload;
      let commentsObject = {};

      for(let comment of comments) {
        commentsObject[comment._id] = comment;
      }

      return commentsObject;

    case DELETE_COMMENT:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

export default commentsReducer;
