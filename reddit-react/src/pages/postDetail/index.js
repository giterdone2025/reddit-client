import './PostDetail.css';
import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {getPost} from '../../api/postFinder';

const PostDetail = () => {
    const {subreddit, postId} = useParams();
    const [post, setPost] = useState(undefined);
    const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'

    useEffect(() => {
        let isMounted = true;

        async function getPostData() {
            setStatus('loading');
            try {
                const result = await getPost(subreddit, postId);
                if (!isMounted) return;

                if (result) {
                    setPost(result);
                    setStatus('success');
                } else {
                    setStatus('error');
                }
            } catch (err) {
                if (isMounted) setStatus('error');
            }
        }

        getPostData();

        return () => { isMounted = false; };
    }, [subreddit, postId]);

    function hoverOverArrow(idName) {
        const element = document.getElementById(idName);
        if (element.style.backgroundColor !== 'red' && element.style.backgroundColor !== 'green') {
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            element.style.cursor = 'pointer';
        }
    }

    function hoverAwayFromArrow(idName) {
        const element = document.getElementById(idName);
        if (element.style.backgroundColor !== 'red' && element.style.backgroundColor !== 'green') {
            element.style.backgroundColor = 'transparent';
            element.style.cursor = 'auto';
        }
    }

    function changeColorToGreen(idName) {
        const element = document.getElementById(idName);
        element.style.backgroundColor = element.style.backgroundColor !== 'green' ? 'green' : 'transparent';
        const secondElement = document.getElementById(idName.replace('up', 'down'));
        secondElement.style.backgroundColor = 'transparent';
    }

    function changeColorToRed(idName) {
        const element = document.getElementById(idName);
        element.style.backgroundColor = element.style.backgroundColor !== 'red' ? 'red' : 'transparent';
        const secondElement = document.getElementById(idName.replace('down', 'up'));
        secondElement.style.backgroundColor = 'transparent';
    }

    // Flattens each comment object's `replies` array into individual
    // comment blocks. Mock data only provides one userName per comment
    // object (often blank) and no per-reply timestamp, so those fields
    // fall back to placeholders until the app moves to live Reddit data,
    // which provides a real author + created_utc per comment.
    function flattenComments(comments) {
        if (!comments) return [];
        return comments.flatMap((comment, commentIndex) =>
            comment.replies.map((replyText, replyIndex) => ({
                key: `${commentIndex}-${replyIndex}`,
                userName: comment.userName || 'anonymous',
                profileIcon: comment.profileIcon,
                text: replyText,
            }))
        );
    }

    if (status === 'loading') {
        return <h2 className="post-detail-status">Loading...</h2>;
    }

    if (status === 'error' || !post) {
        return (
            <div className="post-detail-status post-detail-error">
                <h2>We couldn't find this post.</h2>
                <Link to={subreddit ? `/${subreddit}` : '/'} className="back-to-home-link">
                    &larr; Back to posts
                </Link>
            </div>
        );
    }

    const hasMedia = Boolean(post.image);
    const comments = flattenComments(post.comments);

    return (
        <div className="post-detail-layout">
            {hasMedia ? (
                <div
                    className="post-media-container post-detail-media"
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5)), url(${post.image})`}}
                >
                    <div className="flex-headline-and-expand-icon">
                        <p className="post-headline">{post.headline}</p>
                    </div>
                    <div className="flex-arrow-icons-and-number">
                        <div
                            onMouseEnter={() => hoverOverArrow(post.id + 'upward-icon')}
                            onMouseLeave={() => hoverAwayFromArrow(post.id + 'upward-icon')}
                            onClick={() => changeColorToGreen(post.id + 'upward-icon')}
                            id={post.id + 'upward-icon'}
                            className="upward-icon"
                        ></div>
                        <p className="amount-of-votes">
                            {Intl.NumberFormat('en-US', {
                                notation: 'compact',
                                maximumFractionDigits: 0
                            }).format(post.numVotes)}
                        </p>
                        <div
                            onMouseEnter={() => hoverOverArrow(post.id + 'downward-icon')}
                            onMouseLeave={() => hoverAwayFromArrow(post.id + 'downward-icon')}
                            onClick={() => changeColorToRed(post.id + 'downward-icon')}
                            id={post.id + 'downward-icon'}
                            className="downward-icon"
                        ></div>
                    </div>
                </div>
            ) : (
                // No media: caption renders as large plain text, with the
                // vote controls placed alongside it instead of overlaid.
                <div className="post-detail-text-only">
                    <p className="post-headline-large">{post.headline}</p>
                    <div className="flex-arrow-icons-and-number text-only-votes">
                        <div
                            onMouseEnter={() => hoverOverArrow(post.id + 'upward-icon')}
                            onMouseLeave={() => hoverAwayFromArrow(post.id + 'upward-icon')}
                            onClick={() => changeColorToGreen(post.id + 'upward-icon')}
                            id={post.id + 'upward-icon'}
                            className="upward-icon upward-icon-dark"
                        ></div>
                        <p className="amount-of-votes amount-of-votes-dark">
                            {Intl.NumberFormat('en-US', {
                                notation: 'compact',
                                maximumFractionDigits: 0
                            }).format(post.numVotes)}
                        </p>
                        <div
                            onMouseEnter={() => hoverOverArrow(post.id + 'downward-icon')}
                            onMouseLeave={() => hoverAwayFromArrow(post.id + 'downward-icon')}
                            onClick={() => changeColorToRed(post.id + 'downward-icon')}
                            id={post.id + 'downward-icon'}
                            className="downward-icon downward-icon-dark"
                        ></div>
                    </div>
                </div>
            )}

            <div className="post-detail-meta">
                <p>{post.userName}</p>
                <p>Feb. 24th, 2025</p>
            </div>

            <h2 className="comments-header">Comments</h2>

            <div className="comments-box">
                {comments.length ? (
                    comments.map((comment) => (
                        <div className="comment-row" key={comment.key}>
                            <div className="comment-profile-icon"></div>
                            <div className="comment-body-column">
                                <p className="comment-username">{comment.userName}</p>
                                <div className="comment-text-and-date">
                                    <p className="comment-text">{comment.text}</p>
                                    <p className="comment-date">Feb. 24th, 2025</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-comments-message">No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default PostDetail;