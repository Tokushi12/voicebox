import React from 'react';

const ViewPostModal = ({ post, currentUser, handleVote, onClose, updateModalPost }) => {
  const hasVoted = post.votedBy?.includes(currentUser.id);
  
  return (
    <div className="modal-overlay">
      <div className="modal-content view-post-modal-content">
        <button
          onClick={onClose}
          className="modal-close-button"
        >
          ✕
        </button>
        <h2 className="view-post-title">{post.title}</h2>
        <p className="view-post-category">Category: {post.category}</p>
        <p className="view-post-author">Author: {post.author}</p>
        <p className="view-post-description">{post.description}</p>
        <div className="view-post-vote-buttons">
          <button
            onClick={() => {
              if (!hasVoted) {
                handleVote(post.id, 'upvotes');
                updateModalPost({ ...post, upvotes: post.upvotes + 1, votedBy: [...(post.votedBy || []), currentUser.id] });
              }
            }}
            className={`vote-button ${hasVoted ? 'disabled' : ''}`}
            disabled={hasVoted}
          >
            <span className="vote-emoji">👍</span>
            <span className="vote-count">{post.upvotes}</span>
          </button>
          <button
            onClick={() => {
              if (!hasVoted) {
                handleVote(post.id, 'downvotes');
                updateModalPost({ ...post, downvotes: post.downvotes + 1, votedBy: [...(post.votedBy || []), currentUser.id] });
              }
            }}
            className={`vote-button ${hasVoted ? 'disabled' : ''}`}
            disabled={hasVoted}
          >
            <span className="vote-emoji">👎</span>
            <span className="vote-count">{post.downvotes}</span>
          </button>
        </div>
        {hasVoted && (
          <p className="voted-message">You have already voted on this post</p>
        )}
      </div>
    </div>
  );
};

export default ViewPostModal;