import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import AuthService from './service/auth';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Data from './data';
import {combineReducers, createStore} from 'redux';
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const authService = new AuthService();
function reducer(state = Data,action){
    if(action.type === 'add'){
      let copyData = [...state];
      copyData.push(action.payload);
      return copyData;
    }
    else{
      return state;
    }
}
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App youtube={youtube} authService={authService} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
