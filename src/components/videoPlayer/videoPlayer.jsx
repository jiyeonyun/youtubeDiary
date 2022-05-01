import React, { useState } from 'react';
import styles from './videoPlayer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown,faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import { dbService } from '../../service/mybase';
import { collection, addDoc } from "firebase/firestore";
import WriteModal from '../writeModal/writeModal';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
const VideoPlayer = ({video,video:{snippet}}) =>{
    const[des,setdes] = useState(false);
    const [modalOn,setModalOn] = useState(false);
    const[clicked,setClicked] = useState(false);
    const click = ()=>{
        setdes(!des);
    }
    const Modal = ()=>{
        setModalOn(!modalOn)
    }
    const[write,setWrite]=useState([]);
    const dispatch = useDispatch();
    let str = snippet.title;
    const saveDatabase = async()=>{
        const savedVideo = {
            name:str,
            channelName:snippet.channelTitle,
            date:snippet.publishedAt,
            img:snippet.thumbnails.medium.url,
            id: new Date(),
            write: write,
            clicked:true,
        }
        await addDoc(collection(dbService,"savedVideos"),savedVideo);
    }
    const saveVideo = ()=>{
        dispatch({type:'Add', payload :{
            name:str,
            channelName:snippet.channelTitle,
            date:snippet.publishedAt,
            img:snippet.thumbnails.medium.url,
            id: new Date(),
            write: write,
            clicked:true,
        }})
    };
    const WriteChange = (a)=>{
        console.log(a);
        let newWrite = [...write];
        newWrite.push(a);
        console.log(newWrite)
        setWrite(newWrite);
    };
    return(
        <section className={styles.detail}>
        <iframe
            className={styles.video}
            text="text/html"
            width='100%'
            height='300px'
            title="youtube video player"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder='0'
            allowFullScreen
            ></iframe>
            <h2 className={styles.title}>{snippet.title}</h2>
            <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
            <button className={styles.button} onClick={click}>
                {
                    des ?<FontAwesomeIcon icon={faArrowUp} />  :<FontAwesomeIcon icon={faArrowDown} />
                }
            </button>
            {
                des && <pre className={styles.description}>{snippet.description}</pre>
            }
            <button className={styles.button} onClick={Modal}><FontAwesomeIcon icon={faComment} /></button>
            <button value='button' onClick={()=>{
                    if(clicked === false){
                        saveVideo();
                        saveDatabase();
                        setClicked(!clicked);
                    }
                }} className={styles.button}>
                {clicked? <i className="icon fa-solid fa-bookmark"></i>
                        :<FontAwesomeIcon className={styles.icon} icon={faBookmark} />
                }
                </button>
            {
                modalOn && 
                <div className={styles.modal}>
                    <WriteModal WriteChange={WriteChange}/>
                </div>
            }
        </section>
    );
};

export default VideoPlayer;