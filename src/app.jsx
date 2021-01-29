import './app.css';
import React, {useEffect, useState} from 'react';
import Search from "./components/Search";
import ListContainer from './container/ListContainer';
import youtube from './api.js';

const App = () => {
  const [landingData, setLandingData] = useState();
  const [isLoaded, setIsLoading] = useState(false);

  const getLandingData = async() => {
    try{
      setIsLoading(false);
      const response = await youtube.get("/videos",{
        params : {
          chart : 'mostPopular'
        }
      });
      setLandingData(response);
    }
    catch {}
    finally{
      setIsLoading(true);
    }
  }

  useEffect(() => {
    getLandingData();
  }, []);

  return (
    <>
    <Search />
    {
      isLoaded
      ? <>
          <ListContainer landingData={landingData} />
        </>
      : <p>Loading...</p>
    }
    </>
  )

}

export default App;
