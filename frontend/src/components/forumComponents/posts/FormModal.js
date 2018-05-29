import React, { Component } from 'react';
import Modal from 'react-modal';

//components
import PostForm from '../../formComponents/PostForm';

const customStyles = {
  content : {
    top              : "40%",
    left             : "50%",
    right            : "auto",
    bottom           : "auto",
    marginRight      : "-50%",
    transform        : "translate(-50%, -50%)",
    width            : "980px",
    height           : "550px"
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
    return (
      <div>
        <a onClick={this.toggleModal}>
          {this.props.modalText}
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel="Post Form"
        >
          <button className="modal-exit-button" onClick={this.toggleModal}> X </button>
          <PostForm />
        </Modal>
      </div>
    )
  }
}

export default AuthModal;
