import React from 'react';
import styles from './video.module.css';
const Video = ({videoItem}) => {
    return(
        <li className={styles.li}>
            <div className={styles.buttons}>
                <button className={styles.button}>스크랩</button>
                <button className={styles.button}>다이어리</button>
            </div>
            <img className={styles.img} src={videoItem.snippet.thumbnails.default.url} alt="" />
            <div className={styles.desWrap}>
                <p className={styles.title}>{videoItem.snippet.title}</p>
                <p className={styles.channelName}>{videoItem.snippet.channelTitle}</p>
                <p className={styles.date}>{videoItem.snippet.publishedAt}</p>
            </div>
        </li>
    );
};

export default Video;