import React from 'react';
import { Link } from 'react-router-dom';

const EditPostButton = ({ post }) => {
  return (
    <div className="edit-post-link">
      <Link to={`/tournaments/${post._tournament}/forum/${post._id}/edit`}>
          Edit
      </Link>
    </div>
  )
}

export default EditPostButton;
