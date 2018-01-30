import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//testing
import axios from 'axios';
window.axios = axios;

ReactDOM.render(<App />, document.getElementById('root'));
