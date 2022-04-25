import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import BookmarkItem from '../../components/bookmarkItem/bookmarkItem';
import { collection,orderBy,getDocs,query,onSnapshot,doc } from "firebase/firestore";
import { dbService } from '../../service/mybase';
import styles from './bookmark.module.css';
const Bookmark = ({authService,youtube}) => {
    const [list,setList] = useState([]);

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
        useEffect(() => {
            getVideo();
        }, []);
    console.log(list)
    return(
        <div>
        <Header/>
        {
            list.length === 0 
            ? <div className={styles.null}><h4 className={styles.nullTitle}>저장된 비디오가 없습니다.</h4></div> 
            : list.map((a)=>{
                return( <BookmarkItem key={a.id} item={a} youtube={youtube} authService={authService}/>)
            })
        }
        </div>
    );
};
export default Bookmark;