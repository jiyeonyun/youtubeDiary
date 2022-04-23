import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
const Login = ({authService}) => {
    const navigator = useNavigate();
    const goToHome = (data)=>{
        navigator('/home',{state:{id:data.user.uid, name:data.user.displayName,photo:data.user.photoURL}});
    }
    const onLogin = (event) =>{
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToHome(data));
    }
    useEffect(()=>{
        authService
        .onAuthChange(user=>{
            user && goToHome(user.uid);
        });
    });
    return(
        <section className={styles.login}>
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>Google</button>
                    </li>

                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>Github</button>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default Login;