import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import GetButton from './components/RequestButton/GetButton';

axios.defaults.baseURL = 'http://localhost:8080/v1';

ReactDOM.render(
  <React.StrictMode>
    <GetButton buttonName="Get Users" url="/users"/>
  </React.StrictMode>,
  document.getElementById('root')
);
