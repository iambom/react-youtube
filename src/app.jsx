import './app.css';
import React, {useEffect} from 'react';
import Search from "./components/Search";
import ListContainer from './container/ListContainer';
import youtube from './api.js';

const App = () => {
  const getLandingData = async() => {
    const response = await youtube.get("/videos",{
      params : {
        chart : 'mostPopular'
      }
    });
    console.log(response);
  }

  useEffect(() => {
    getLandingData();
  }, []);

  return (
    <>
      <Search />
      <ListContainer />
    </>
  )

}

export default App;
