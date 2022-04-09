import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import 'react-responsive-modal/styles.css';
/*import { modal } from 'react-responsive-modal';*/
import classes from './VideoModal.module.css';

export default function VideoResponModal() {
  const [isOpen, setOpen] = useState(false);

  /*const [videoId, setVideoId] = useState([
    'sSZNLAIL65M',
    'L61p2uyiMSo',
    'mHpu2DI3m0I',
  ]);*/

  return (
    <div className={classes.container}>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="sSZNLAIL65M" /*{videoId[0]}*/
          onClose={() => setOpen(false)}
        />

        <button className="btn-primary" onClick={() => setOpen(true)}>
          open
        </button>
      </React.Fragment>

      <div className={classes.container}>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="L61p2uyiMSo" /*{videoId[1]}*/
            onClose={() => setOpen(false)}
          />

          <button className="btn-primary" onClick={() => setOpen(true)}>
            open
          </button>
        </React.Fragment>
      </div>

      <div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="sSZNLAIL65M" /*{videoId[2]}*/
            onClose={() => setOpen(false)}
          />

          <button className="btn-primary" onClick={() => setOpen(true)}>
            open
          </button>
        </React.Fragment>
      </div>
    </div>
  );
}
