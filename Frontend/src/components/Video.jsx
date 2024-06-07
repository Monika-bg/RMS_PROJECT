// Video.js
import React from 'react';

const Video = () => {
  return (
    <div className="intro-video">
      <video 
        src="./menu-video.mp4"
        autoPlay 
        loop 
        muted
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Video;
