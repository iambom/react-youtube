import axios from "axios";

const KEY = "AIzaSyD_A-MIp774wIMuIm-fPIAPnZaJvG6aVx0";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      part: "snippet",
      maxResults: '25',
      key: KEY
    }
});
