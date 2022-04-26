import React, { useEffect, useState } from 'react';
import styles from './video.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { dbService } from '../../service/mybase';
import { collection, addDoc } from "firebase/firestore";
import WriteModal from '../writeModal/writeModal';
const Video = ({videoItem,onVideoClick}) => {
    const dispatch = useDispatch();
    const [modalOn,setModalOn] = useState(false);
    const[clicked,setClicked] = useState(false);
    const[write,setWrite]=useState('');
    let length = 35; 
    let str = videoItem.snippet.title;
    const saveDatabase = async()=>{
        const savedVideo = {
            name:str,
            channelName:videoItem.snippet.channelTitle,
            date:videoItem.snippet.publishedAt,
            img:videoItem.snippet.thumbnails.medium.url,
            id: new Date(),
            write: write,
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
            write: write,
            clicked:true,
        }})
    };
    const onChange = (event)=>{
        const{
            target: {value},
        } = event;
        setWrite(value);
    };
    const Modal = ()=>{
        setModalOn(!modalOn)
    }
    return(
        <li value="li" className={styles.li} onClick={(e)=>e.target.value == undefined && onVideoClick(videoItem)}>
            <div className={styles.liWrap}>
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
                <button onClick={Modal} value='button' className={styles.button}><FontAwesomeIcon className={styles.icon}  icon={faFilePen} /></button>
            </div>
            <div className={styles.desWrap}>
                <p className={styles.title}>{str.length>length? str.substr(0, length - 2) + '...' :str}</p>
                <p className={styles.channelName}>{videoItem.snippet.channelTitle}</p>
                <p className={styles.date}>{videoItem.snippet.publishedAt}</p>
            </div>
            </div>
            {
                modalOn && 
                <div className={styles.modal}>
                <WriteModal onChange={onChange}/>
                </div>
            }
        </li>
    );
};

export default Video;