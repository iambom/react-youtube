import React, {Component} from 'react';
import VideoList from '../components/VideoList';

const ListContainer = ({landingData, }) => {

    const data = landingData.data.items;
    
    return (
        <ul className="video-list clearfix">
            {
                data.map(item => {
                    const itemList = item.snippet;
                    
                    return(
                        <VideoList itemList={itemList}/>
                    )
                })
            }
        </ul>
    )
}

export default ListContainer;