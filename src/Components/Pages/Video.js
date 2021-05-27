import React from 'react'
import ReactPlayer from "react-player";

import Header from 'Components/UI/Header';

function Video() {
    return(
        <>
            <Header>
                <h1>Sunbell 2.0</h1>
                <p>This video explains how to use your sunbell</p>
            </Header>
            <div className='video'>
                <iframe
                    className='player'
                    src='https://www.youtube.com/embed/watch?v=7aWow1MKHzc'
                />
            </div>
        </>
    );
}
export default Video;