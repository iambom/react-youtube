import React from 'react';
import VideoList from '../components/VideoList';
import styles from './ListContainer.module.css';

const ListContainer = ({videos, onVideoClick, display}) => (
    <ul className={styles.videos}>
        {
            videos.map(video => (
                <VideoList video={video} key={video.id} onVideoClick={onVideoClick} display={display}/>
            ))}
    </ul>
)


export default ListContainer;