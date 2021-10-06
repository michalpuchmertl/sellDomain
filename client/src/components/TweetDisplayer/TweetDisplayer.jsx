import React, { useEffect, useState, useRef, useCallback } from 'react'
import { io } from "socket.io-client";

import { VariableSizeList as List } from 'react-window';

import Tweet from './Tweet';
import './tweetdisplayer.scss';
import sampleTweets from './sampleTweets';

const Row = ({ data, index, setSize }) => {
    const rowRef = useRef();

    React.useEffect(() => {
        setSize(index, rowRef.current.getBoundingClientRect().height);
      }, [setSize, index]);
  
    return (
        <div ref={rowRef}>
            <Tweet id={data[index].id} username={data[index].username} text={data[index].text} />
        </div>
    );
  };
  

function TweetDisplayer(props) {

    const { className } = props

    const [tweets, setTweets] = useState([])

    const listRef = useRef();
    const sizeMap = useRef({});

    const setSize = useCallback((index, size) => {
        sizeMap.current = { ...sizeMap.current, [index]: size };
        listRef.current.resetAfterIndex(index);
    }, []);

    const getSize = index => sizeMap.current[index] || 50;
    

    useEffect(() => {
        const socket = io()
        socket.on('connect', () => {
            console.log('Connected to server...')
        })

        socket.on('tweet', (tweet) => {
            const tweetData = {
                id: tweet.data.id,
                text: tweet.data.text,
                username: `@${tweet.includes.users[0].username}`
            }
            setTweets(prev => [tweetData, ...prev])
        })
    }, [])


    const getList = () => {
        if(tweets.length > 0) {
            return(
                <List
                ref={listRef}
                height={400}
                width="100%"
                itemCount={tweets.length}
                itemSize={getSize}
                itemData={tweets}
                >

                {({ data, index, style }) => (
                    <div style={style}>
                    <Row
                        data={data}
                        index={index}
                        setSize={setSize}
                    />
                    </div>
                )}
            </List>
            )
        }
    }
    


    return (        
        <div className="col-8">
            <h2 className="mt-4 text-secondary">#PandoraPapers</h2>
            <div className={`tweet-displayer-wrapper ${className}`}>
            {getList()}
            </div>
        </div>
    )
}

export default TweetDisplayer

