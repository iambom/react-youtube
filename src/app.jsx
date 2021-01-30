import './app.css';
import React, {useEffect, useState} from 'react';
// import { Route, Router } from 'react-router-dom';
// import Search from "./components/Search";
import ListContainer from './container/ListContainer';
// import youtube from './api.js';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // url 과 만든 options 전달
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD_A-MIp774wIMuIm-fPIAPnZaJvG6aVx0", requestOptions)
      .then(response => response.json()) // fecth가 정상적으로 받아지면 json으로 변환
      .then(result => setVideos(result.items)) // 변환된 json을 콘솔에 출력
      .catch(error => console.log("erroe", error)); // 에러 발생시 콘솔 출력
  }, []);

  return <ListContainer videos={videos}/>

}

export default App;
