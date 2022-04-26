import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import styles from './login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
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
        <div className={styles.wrap}>
            <Header/>
            <section className={styles.login}>
                <div className={styles.loginImage}>
                    <img className={styles.img} src="/Users/yunjiyeon/youtubeDiary/public/assets/diary.jpeg" alt="" />
                    <p className={styles.loginP}>캡쳐대신 기록하고싶다면</p>
                    <h4 className={styles.lodinh4}>Youtube Diary</h4>
                </div>
                <div className={styles.ulWrap}>
                <h1 className={styles.loginTitle}>Login</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <button onClick={onLogin} className={styles.button}><FontAwesomeIcon icon={faGoogle} />Google</button>
                        </li>
                        <li className={styles.item}>
                            <button onClick={onLogin} className={styles.button}><FontAwesomeIcon icon={faGithub} />Github</button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Login;