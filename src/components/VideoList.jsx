import React, {useEffect} from 'react';

const VideoList = ({itemList, }) => {
 
    return (
        <li>
           <a className="clearfix">
               <div className="img_wrap">
                    <img src={itemList.thumbnails.default.url} alt={itemList.title} />
               </div>
               <div className="txt_wrap">
                   <p>{itemList.title}</p>
                   <p>{itemList.description}</p>
               </div>
           </a>
        </li>
    )
}

export default VideoList;