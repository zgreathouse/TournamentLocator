import React, { Component } from 'react';
import Modal from 'react-modal';

//components
import AuthModalBody from './AuthModalBody';

const customStyles = {
  content : {
    top              : '50%',
    left             : '50%',
    right            : 'auto',
    bottom           : 'auto',
    marginRight      : '-50%',
    transform        : 'translate(-50%, -50%)',
    width            : '400px',
    height           : '450px',
  }
};

class AuthModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderSignUpModal = this.renderSignUpModal.bind(this);
    this.renderLoginModal = this.renderLoginModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderSignUpModal() {
    return (
      <div>
        <button onClick={this.openModal}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Modal"
        >
          <button onClick={this.closeModal}> X </button>
          <AuthModalBody modalType="Sign Up"/>
        </Modal>
      </div>
    )
  }

  renderLoginModal() {
    return (
      <div>
        <button onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Modal"
        >
          <button onClick={this.closeModal}> X </button>
          <AuthModalBody modalType="Login"/>
        </Modal>
      </div>
    )
  }

  render() {
    const { modalType } = this.props;
    return modalType === "Sign Up" ?
      this.renderSignUpModal() : this.renderLoginModal();
  }
}

export default AuthModal;
