import React from 'react';
import GalleryItem from './ImageGalleryItem';

const ImmageGallery = props => {
  return (
    <ul className="gallery">
      {props.pics.length > 0 &&
        props.pics.map(item => <GalleryItem image={item.webformatURL} />)}
    </ul>
  );
};

export default ImmageGallery;
