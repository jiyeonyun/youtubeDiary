import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import Login from './routes/login/login';
import Home from './routes/home/home';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
function App({youtube,authService}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.innerWrap}>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login authService={authService}/>} />
            <Route path='/home' element={<Home authService={authService} youtube={youtube}/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
