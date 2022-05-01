import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import BookmarkItem from '../../components/bookmarkItem/bookmarkItem';
import { collection,orderBy,getDocs,query,onSnapshot,doc } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { dbService } from '../../service/mybase';
import { useNavigate } from 'react-router-dom';
import styles from './bookmark.module.css';
const Bookmark = ({authService,youtube}) => {
    const [list,setList] = useState([]);
    const [del,setDel] = useState(false);
    const getVideo = async () => {
        const q = query(collection(dbService, "savedVideos"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        const videoObj = {
        ...doc.data(),
        id: doc.id,
        }
        setList(prev => [videoObj, ...prev]);
        });
    };
    const navigator = useNavigate();
    const goToHome = ()=>{
        navigator('/home');
    }
    useEffect(() => {
            getVideo();
        }, [del]);
    return(
        <div className={styles.Bookmark}>
        <Header/>
        {
            list.length === 0 
            ? <div className={styles.null}><h4 className={styles.nullTitle}>저장된 비디오가 없습니다.</h4></div> 
            : <ul className={styles.ul}>  {list.map((a)=>{return( <BookmarkItem key={a.id} item={a} youtube={youtube} authService={authService} setDel={setDel}/>)
            })} </ul>
        }
        <button onClick={goToHome} className={styles.button}><FontAwesomeIcon icon={faHome}/></button>
        </div>
    );
};
export default Bookmark;