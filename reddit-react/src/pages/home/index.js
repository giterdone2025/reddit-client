import './HomePage.css';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getPosts} from '../../api/postFinder';

const HomePage = () => {
    const {type} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getPostsData() {
            const postsData = await getPosts(type);
            setData(postsData);
            console.log(data);
        }

        getPostsData();
    }, [type]);

    return (
        <>
            {data.length ? (
                <div className="posts-grid-layout">
                    {data.map((post) => (
                        <div className="post-media-container">

                        </div>
                    ))}
                </div>) : (<></>)
            }
        </>
    );

}

export default HomePage;