import React from 'react';

class GalleryItem extends React.Component {
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.image} alt="" />
      </li>
    );
  }
}

export default GalleryItem;
