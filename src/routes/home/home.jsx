import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import UserCard from '../../components/userCard/userCard';
import Video from '../../components/video/video';

const Home = ({youtube,authService}) => {
    const[videos, setVideos] = useState([]);
    const navigatorState = useNavigate().state;
    const [userId, setUserId] = useState(navigatorState && navigatorState.id);
    const [name,setName] = useState(navigatorState&&navigatorState.name);
    const [photo,setPhoto] = useState(navigatorState&&navigatorState.photo);
    const navigator = useNavigate();
    const onLogout = useCallback( ()=>{
        authService.logout();
    },[authService]);
    useEffect(()=>{
        youtube
            .mostPopular()
            .then(videos=> setVideos(videos)); 
    },[youtube]);
    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(user){
                setUserId(user.uid);
                setName(user.displayName);
                setPhoto(user.photoURL)
            }
            else{
                navigator('/');
            }
        });
    },[userId,authService])
    console.log(videos)
        return(
            <div>
                <Header/>
                <UserCard name={name} photo={photo} onLogout={onLogout}/>
                <ul>
                {videos.map((items)=>(
                    <Video key={items.id} videoItem={items}/>
                ))}
                </ul>
            </div>
        );     
    };

export default Home;