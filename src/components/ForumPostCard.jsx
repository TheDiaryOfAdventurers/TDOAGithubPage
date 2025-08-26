import React from 'react';
import './ForumPostCard.css';

const ForumPostCard = ({post}) => {
    return (
        <div className="forum-post-card">
            <h3 className="post-title-top">{post.title}</h3>
            <div className="user-info-section">
                <div className="avatar"></div>
                <span className="username">{post.username}</span>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default ForumPostCard;
