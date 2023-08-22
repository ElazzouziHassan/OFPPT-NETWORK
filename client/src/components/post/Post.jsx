import "./post.scss";

import React from 'react'

function Post() {
  return (
    <div className="post">
      <div className="top">
        <div className="user"></div>
        <div className="time"></div>
      </div>
      <div className="content">
        <p>content</p>
        <img src="#" alt="media" />
      </div>
      <div className="bottom">BOTTOM</div>
    </div>
  )
}

export default Post