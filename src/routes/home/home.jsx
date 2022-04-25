import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import Header from '../../components/header/header';
import SearchBox from '../../components/searchBox/searchBox';
import UserCard from '../../components/userCard/userCard';
import Video from '../../components/video/video';
import VideoPlayer from '../../components/videoPlayer/videoPlayer'

const Home = ({youtube,authService}) => {
    const[videos, setVideos] = useState([]);
    const navigatorState = useNavigate().state;
    const [userId, setUserId] = useState(navigatorState && navigatorState.id);
    const [name,setName] = useState(navigatorState&&navigatorState.name);
    const [photo,setPhoto] = useState(navigatorState&&navigatorState.photo);
    const[selectedVideo,setSelectedVideo] = useState(null);
    const selectVideo = (video) =>{
        setSelectedVideo(video);
    }
    const navigator = useNavigate();
    const onLogout = useCallback( ()=>{
        authService.logout();
    },[authService]);
    const search = useCallback(
        query => {
            youtube
            .search(query)
            .then(videos=> setVideos(videos)); 
        },[youtube]);
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
    },[userId,authService]);
        return(
            <div>
                <Header/>
                <UserCard name={name} photo={photo} onLogout={onLogout}/>
                <SearchBox search={search}/>
                {selectedVideo 
                ?( <div> 
                        <VideoPlayer video={selectedVideo}/>
                    </div>)
                : ( <ul className={styles.ul}>
                        {videos.map((items)=>(
                            <Video key={items.id} videoItem={items} onVideoClick={selectVideo}/>
                        ))}
                        
                    </ul>
                )}
            </div>
        );     
    };

export default Home;