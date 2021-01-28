import React from 'react';

const VideoList = () => {
    return (
        <li>
           <a>
               <div>thumbnail image</div>
               <div className="txt_wrap">
                   <p>title</p>
                   <p>desc</p>
               </div>
           </a>
        </li>
    )
}

export default VideoList;