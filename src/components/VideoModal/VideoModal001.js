import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import classes from './VideoModal.module.css';

export class VideoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div className={classes.ModalVideo}>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="MD2Q6cqVmL4"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button onClick={this.openModal}>Open</button>
        </div>
      </div>
    );
  }
}
export default VideoModal;
