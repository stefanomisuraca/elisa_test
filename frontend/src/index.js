import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axios from 'axios'
import UsersPage from './components/UsersPage/UsersPage';


axios.defaults.baseURL = 'http://localhost:8080/v1';

const initialState = {
  users: []
}

function reducer (state = initialState, action) {

  console.log(action);
  switch(action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <UsersPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
