import React, {Component} from 'react';
import VideoList from '../components/VideoList';
import styles from './ListContainer.module.css';

const ListContainer = ({videos, }) => {

    return (
        <ul className={styles.videos}>
            {
                videos.map(video => {
                    return(
                        <VideoList video={video} key={video.id}/>
                    )
                })
            }
        </ul>
    )
}

export default ListContainer;