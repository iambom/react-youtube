import React, {useEffect} from 'react';
import styles from './VideoList.module.css';

const VideoList = ({video : {snippet} }) => {
    console.log(snippet)
    return (
        <li className={styles.container}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url}/>
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default VideoList;