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

    this.state = { modalIsOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }

  render() {
    const { modalType } = this.props;

    return (
      <div>
        <button onClick={this.toggleModal}>{modalType}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel="Auth Modal"
        >
          <button onClick={this.closeModal}> X </button>
          <AuthModalBody modalType={modalType}/>
        </Modal>
      </div>
    )
  }
}

export default AuthModal;
