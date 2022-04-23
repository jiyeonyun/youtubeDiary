import React from 'react';
import styles from './video.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark,faFilePen } from '@fortawesome/free-solid-svg-icons';
const Video = ({videoItem,onVideoClick}) => {
    let length = 35; 
    let str = videoItem.snippet.title;
    return(
        <li className={styles.li} onClick={()=> onVideoClick(videoItem)}>
            <img className={styles.img} src={videoItem.snippet.thumbnails.medium.url} alt="" />
            <div className={styles.desWrap}>
                <p className={styles.title}>{str.length>length? str.substr(0, length - 2) + '...' :str}</p>
                <p className={styles.channelName}>{videoItem.snippet.channelTitle}</p>
                <p className={styles.date}>{videoItem.snippet.publishedAt}</p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}><FontAwesomeIcon icon={faBookmark} /></button>
                <button className={styles.button}><FontAwesomeIcon icon={faFilePen} /></button>
            </div>
        </li>
    );
};

export default Video;