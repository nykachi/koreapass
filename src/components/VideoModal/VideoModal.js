import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import 'react-responsive-modal/styles.css';
/*import { modal } from 'react-responsive-modal';*/

export default function VideoResponModal() {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="mHpu2DI3m0I"
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        Open My Flying MTB Video
      </button>
    </React.Fragment>
  );
}
