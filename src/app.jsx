import { useEffect } from 'react';
import { useState } from 'react';
import './app.css';
import Login from './components/login/login';
import Home from './components/home/home';
function App({youtube}) {
  const[videos, setVideos] = useState([]);
  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos=> setVideos(videos)); 
  },[youtube]);
  return (
    <>
    <Login/>
    <Home/>
    </>
  );
}

export default App;
