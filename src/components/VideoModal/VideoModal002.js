import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import 'react-responsive-modal/styles.css';

function VideoModal(props) {
  const [isOpen, setOpen] = useState(false);
  /*const videoId = (["mHpu2DI3m0I", "sSZNLAIL65M"]);*/

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={true} /*"sSZNLAIL65M"*/
        /*  videoId={(props.videoId = [''])} */
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
    </React.Fragment>
  );
}
/*
function Modal() {
  const videoId = ['mHpu2DI3m0I', 'sSZNLAIL65M'];
  return (
    <>
      <VideoModal videoId={videoId[0]} />
      <VideoModal videoId={videoId[1]} />
    </>
  );
} */

export default VideoModal;
