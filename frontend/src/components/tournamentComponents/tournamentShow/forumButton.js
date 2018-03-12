//a button which navigates the user to forum page
import React from 'react';

const ForumButton = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        margin: "30px",
    }}>
      <button className="btn" style={{width: "50%", height: "4em"}}>
        Forum
      </button>
    </div>
  )
}

export default ForumButton;
