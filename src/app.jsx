import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import Search from "./components/Search";
import ListContainer from './container/ListContainer';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);

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
      <ListContainer videos={videos}/>
    </div>  
  )

}

export default App;
