import React, {useEffect, useState, useRef } from "react";
import video from '../../multimedia/video.mp4'
function Video() {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const muteTimeout = setTimeout(() => {
      playVideo();
    }, 1500);

    return () => clearTimeout(muteTimeout);
  }, []);

  return (
    <div className="mx-4 sm:mx-0">
      <video ref={videoRef}  width="720" height="640" autoPlay controls playsInline>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
}

export default Video;