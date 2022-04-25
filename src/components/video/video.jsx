import React, { useEffect, useState } from 'react';
import styles from './video.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { dbService } from '../../service/mybase';
import {  deleteDoc, getFirestore, doc, collection, addDoc } from "firebase/firestore";
const Video = ({videoItem,onVideoClick}) => {
    const dispatch = useDispatch();
    let length = 35; 
    const[clicked,setClicked] = useState(false);
    let str = videoItem.snippet.title;
    const saveDatabase = async()=>{
        const savedVideo = {
            name:str,
            channelName:videoItem.snippet.channelTitle,
            date:videoItem.snippet.publishedAt,
            img:videoItem.snippet.thumbnails.medium.url,
            id: new Date()
        }
        await addDoc(collection(dbService,"savedVideos"),savedVideo);
    }
    const saveVideo = ()=>{
        dispatch({type:'Add', payload :{
            name:str,
            channelName:videoItem.snippet.channelTitle,
            date:videoItem.snippet.publishedAt,
            img:videoItem.snippet.thumbnails.medium.url,
            id: new Date(),
            clicked: true
        }})
    };

    return(
        <li className={styles.li} onClick={(e)=>e.target.value !== 'button' && onVideoClick(videoItem)}>
            <img className={styles.img} src={videoItem.snippet.thumbnails.medium.url} alt="" />
            <div value='button' className={styles.buttons}>
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
                <button value='button' className={styles.button}><FontAwesomeIcon className={styles.icon}  icon={faFilePen} /></button>
            </div>
            <div className={styles.desWrap}>
                <p className={styles.title}>{str.length>length? str.substr(0, length - 2) + '...' :str}</p>
                <p className={styles.channelName}>{videoItem.snippet.channelTitle}</p>
                <p className={styles.date}>{videoItem.snippet.publishedAt}</p>
            </div>
        </li>
    );
};

export default Video;