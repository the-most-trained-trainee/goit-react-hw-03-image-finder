import React from 'react';
import Modal from './Modal';

class GalleryItem extends React.Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    return (
      <>
        <li className="ImageGalleryItem" onClick={this.toggleModal}>
          <img
            src={this.props.image}
            alt=""
            className="ImageGalleryItem-image"
          />
        </li>
        {this.state.isModalOpen && (
          <Modal fullImage={this.props.fullImage} close={this.toggleModal} />
        )}
      </>
    );
  }
}

export default GalleryItem;
