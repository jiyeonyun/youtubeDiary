import React from 'react';
import styles from './video.module.css';
const Video = ({videoItem}) => {
    let length = 35; 
    let str = videoItem.snippet.title;
    return(
        <li className={styles.li}>
            <img className={styles.img} src={videoItem.snippet.thumbnails.medium.url} alt="" />
            <div className={styles.desWrap}>
                <p className={styles.title}>{str.length>length? str.substr(0, length - 2) + '...' :str}</p>
                <p className={styles.channelName}>{videoItem.snippet.channelTitle}</p>
                <p className={styles.date}>{videoItem.snippet.publishedAt}</p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}>스크랩</button>
                <button className={styles.button}>다이어리</button>
            </div>
        </li>
    );
};

export default Video;