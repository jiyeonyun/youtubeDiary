import React, { useState } from 'react';
import styles from './videoPlayer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown,faArrowUp } from '@fortawesome/free-solid-svg-icons';
const VideoPlayer = ({video,video:{snippet}}) =>{
    const[des,setdes] = useState(false);
    const click = ()=>{
        setdes(!des);
    }
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
        </section>
    );
};

export default VideoPlayer;