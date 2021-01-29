import React, {Component} from 'react';
import VideoList from '../components/VideoList';

const ListContainer = ({landingData, }) => {
    // console.log(landingData)
    const data = landingData.data.items;
    console.log(data)
    // const title = landingData.data.items[0].snippet.title;
    // console.log(title)
    return (
        <ul>
            {
                data.map(item => {
                    const itemList = item.snippet;
                    console.log(itemList)
                    return(
                        <VideoList itemList={itemList}/>
                    )
                })
            }
        </ul>
        // <VideoList landingData={landingData}/>
    )
}

export default ListContainer;