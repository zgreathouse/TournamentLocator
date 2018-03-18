//css libraries
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-social/materialize-social.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// Root Component and Root Reducer
import App from './components/App';
import reducers from './reducers';

//for testing backend api:
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
