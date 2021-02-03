import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import Search from "./components/Search";
import VideoDetail from './components/VideoDetail';
import ListContainer from './container/ListContainer';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Search onSearch={search}/>
      <section className={styles.content}>
      {selectedVideo && ( 
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>
      )}
        <div className={styles.list}>
          <ListContainer videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>  
  )

}

export default App;
