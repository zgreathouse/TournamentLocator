import { FETCH_USER, UPDATE_USER } from '../actions/userActions';

const authReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;

    //create case that updates what is rendered in the header component
    case UPDATE_USER:
      return action.payload || false;

    default:
      return state;
  }
}

export default authReducer;
