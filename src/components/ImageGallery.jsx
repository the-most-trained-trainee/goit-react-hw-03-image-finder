import React from 'react';
import GalleryItem from './ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImmageGallery = props => {
  return (
    <ul className="ImageGallery">
      {props.pics.map(item => (
        <GalleryItem key={nanoid()} image={item.webformatURL} fullImage={item.largeImageURL} />
      ))}
    </ul>
  );
};

export default ImmageGallery;
