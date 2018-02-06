import React from 'react';

const ForumButton = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      margin: "30px",
    }}>
      <button style={{
        width: "50%",
        height: "4em",
        color: "#403f42",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}>Forum</button>
    </div>
  )
}

export default ForumButton;
