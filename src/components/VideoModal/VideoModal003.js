import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import 'react-responsive-modal/styles.css';
/*import VideoModal002 from './VideoModal002';*/

function VideoModalArrayTest() {
  const [videoId, setVideoId] = useState(['mHpu2DI3m0I', 'sSZNLAIL65M']);

  return (
    <div>
      <ModalVideo setVideoId={videoId[0]} />
    </div>
  );
}

export default VideoModalArrayTest;
