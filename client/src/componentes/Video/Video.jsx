import React from "react";
import video from '../../multimedia/video.mp4'
function Video() {

  return (
    <div>
      <video width="720" height="640" controls autoPlay>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
}

export default Video;
