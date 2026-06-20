

import './HomePage.css';
import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import {getPosts} from '../../api/postFinder';
//import { upVote, downVote } from '../../features/votes/votesSlice';
//import { useDispatch } from 'react-redux';

const HomePage = () => {
    const {subreddit} = useParams();
    const [data, setData] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    const getSubreddit = () => {
        return subreddit;
    }
    /*
    .upward-icon:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
}

.downward-icon:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
}
    */

    function hoverOverArrow (idName) {
        const element = document.getElementById(idName);
        if (element.style.backgroundColor !== 'red' && element.style.backgroundColor !== 'green') {
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            element.style.cursor = 'pointer';
        }
        
    }

    function hoverAwayFromArrow (idName) {
        const element = document.getElementById(idName);
        if (element.style.backgroundColor !== 'red' && element.style.backgroundColor !== 'green') {
            element.style.backgroundColor = 'transparent';
            element.style.cursor = 'auto';
        }
        
    }

    useEffect(() => {
        async function getPostsData() {
            const postsData = await getPosts(subreddit);
            setData(postsData.posts);
        }

        getPostsData();

    }, [subreddit, data]);

    if (!data) {
        return <h2>Loading...</h2>;
    }

    function changeColorToGreen(idName) {
        const element = document.getElementById(idName);
        if (element.style.backgroundColor !== 'green') {
            element.style.backgroundColor = 'green';
        }
        else {
            element.style.backgroundColor = 'transparent';
        }
        
        const secondElement = document.getElementById(idName.replace('up', 'down'));
        secondElement.style.backgroundColor = 'transparent';
    }

    function changeColorToRed(idName) {
        const element = document.getElementById(idName);
        if (element.style.backgroundColor !== 'red') {
            element.style.backgroundColor = 'red';
        }
        else {
            element.style.backgroundColor = 'transparent';
        }
        const secondElement = document.getElementById(idName.replace('down', 'up'));
        secondElement.style.backgroundColor = 'transparent';

    }

    // Builds the link target for a post's detail/comments page.
    // Keeps the current subreddit in the URL if we're inside one,
    // so PostDetail knows which mock JSON file to re-fetch from.
    function getPostDetailPath(postId) {
        return subreddit ? `/${subreddit}/post/${postId}` : `/post/${postId}`;
    }

    return (
        <>
            {data.length ? (
                <div className="posts-grid-layout">
                    {data.map((post) => (
                        <div key={post.id}>
                            <div className="post-media-container" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5)), url(${post.image})`}}>
                                <div className="flex-headline-and-expand-icon">
                                    <p className="post-headline">{post.headline.length > 46 ? `${post.headline.substring(0, 43)}...` : post.headline}</p>
                                    <div className="expand-icon"></div>
                                </div>
                                <div className="flex-arrow-icons-and-number">
                                    <div onMouseEnter={() => hoverOverArrow(post.id + 'upward-icon')} onMouseLeave={() => hoverAwayFromArrow(post.id + 'upward-icon')} onClick={() => changeColorToGreen(post.id + 'upward-icon')} id={post.id + 'upward-icon'} className="upward-icon"></div>
                                    <p className="amount-of-votes">
                                        {Intl.NumberFormat('en-US', {
                                            notation: "compact",
                                            maximumFractionDigits: 0
                                        }).format(post.numVotes)}
                                    </p>
                                    <div onMouseEnter={() => hoverOverArrow(post.id + 'downward-icon')} onMouseLeave={() => hoverAwayFromArrow(post.id + 'downward-icon')} onClick={() => changeColorToRed(post.id + 'downward-icon')} id={post.id + 'downward-icon'} className="downward-icon"></div>
                                </div>
                            </div>
                            <div className="flex-username-timestamp-and-chat-icon">
                                <div className="align-and-space-user-name-and-timestamp">
                                    <p>{post.userName}</p>
                                    <p>Feb. 24th, 2025</p>
                                </div>
                                <Link to={getPostDetailPath(post.id)} aria-label={`View comments for ${post.headline}`}>
                                    <div className="chat-icon"></div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>) : (<p>nothing</p>)
            }
        </>
    );

}

export default HomePage;