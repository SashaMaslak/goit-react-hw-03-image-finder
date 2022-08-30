import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindows } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUnMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackDropClick}>
        <ModalWindows>
          <img src={this.props.modalImage} alt="LargeImage" />
        </ModalWindows>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
