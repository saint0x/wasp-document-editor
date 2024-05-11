// client/components/CommentSection.jsx

import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
    // Send new comment to the server for real-time collaboration
    socket.emit('new-comment', newComment);
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input type="text" placeholder="Add a comment" onChange={(e) => addComment(e.target.value)} />
    </div>
  );
};

export default CommentSection;
