import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import Search from "./components/Search";
import ListContainer from './container/ListContainer';

const App = () => {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyD_A-MIp774wIMuIm-fPIAPnZaJvG6aVx0`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }


  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD_A-MIp774wIMuIm-fPIAPnZaJvG6aVx0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("erroe", error));
  }, []);

  return (
    <div className={styles.app}>
      <Search onSearch={search}/>
      <ListContainer videos={videos}/>
    </div>  
  )

}

export default App;
