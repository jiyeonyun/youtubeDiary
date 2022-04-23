import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import AuthService from './service/auth';
import reportWebVitals from './reportWebVitals';
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
