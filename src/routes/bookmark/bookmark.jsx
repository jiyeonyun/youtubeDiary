import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { useSelector} from 'react-redux';
import BookmarkItem from '../../components/bookmarkItem/bookmarkItem';
import { collection,orderBy,getDocs,query,onSnapshot,doc } from "firebase/firestore";
import { dbService } from '../../service/mybase';

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
    // let list = useSelector(state=>state);
    return(
        <div>
        <Header/>
        { 
            list.map((a)=>{
                return( <BookmarkItem key={a.id} item={a} youtube={youtube} authService={authService}/>)
            })
        }
        </div>
    );
};
export default Bookmark;