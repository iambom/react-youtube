import React, {useEffect, useState, useCallback} from 'react';
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

  /*
    App 컴포넌트는 function 컴포넌트이기 때문에 관련된 props나 state가 바뀌면 함수형 컴포넌트 내에서 정의한 멤버변수가 다시 만들어진다. 즉 콜백함수가 계속 새로 만들어진다는 뜻이다. 따라서 state가 바뀔 때마다 serach 함수는 새로운 함수를 가리키게 된다. 그리고 search는 Search 컴포넌트에 전달되기 때문에 새로운 props가 전달 되는 것과 동일하다. 그래서 Search 컴포넌트에 memo를 썼음에도 불구하고 계속해서 re-render 된다. 

    그래서 useCallback을 사용한다.
    Search가 한 번만 만들어지도록 해서 re-rendering이 되지 않는다.
    */
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
    .search(query)
    .then(videos =>setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]);

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
