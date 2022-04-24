import React from 'react';
import styles from './video.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import {connect} from 'react-redux';
const Video = ({videoItem,onVideoClick,props}) => {
    let length = 35; 
    let str = videoItem.snippet.title;
    const saveVideo = ()=>{
        props.dispatch({type: 'add', payload :{
            name:str,
            channelName:videoItem.snippet.channelTitle,
            date:videoItem.snippet.publishedAt,
            img:videoItem.snippet.thumbnails.medium.url,
        }})
    };
    return(
        <li className={styles.li} onClick={()=> onVideoClick(videoItem)}>
            <img className={styles.img} src={videoItem.snippet.thumbnails.medium.url} alt="" />
            <div className={styles.desWrap}>
                <p className={styles.title}>{str.length>length? str.substr(0, length - 2) + '...' :str}</p>
                <p className={styles.channelName}>{videoItem.snippet.channelTitle}</p>
                <p className={styles.date}>{videoItem.snippet.publishedAt}</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={saveVideo} className={styles.button}><FontAwesomeIcon className={styles.icon} icon={faBookmark} /></button>
                <button className={styles.button}><FontAwesomeIcon  icon={faFilePen} /></button>
            </div>
        </li>
    );
};
function connec(state){
    console.log(state)
    return {
            state : state
        }
}  
export default connect(connec)(Video);