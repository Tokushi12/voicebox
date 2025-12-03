import React from 'react';

const PostCard = ({ post, onClick }) => {
  return (
    <div
      className="post-card"
      onClick={onClick}
    >
      <div className="post-card-header">
        <div className="post-card-content">
          <h3 className="post-card-title">{post.title}</h3>
          <p className="post-card-author">By: {post.author}</p>
          <p className="post-card-description">{post.description}</p>
        </div>
        <div className="post-card-votes">
          <div className="post-card-vote-item">
            <span className="post-card-vote-emoji">👍</span>
            <span>{post.upvotes}</span>
          </div>
          <div className="post-card-vote-item">
            <span className="post-card-vote-emoji">👎</span>
            <span>{post.downvotes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;