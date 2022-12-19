import React from 'react';
import GalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ImmageGallery = ({ pics }) => {
  return (
    <ul className="ImageGallery">
      {pics.map(item => (
        <GalleryItem
          key={nanoid()}
          image={item.webformatURL}
          fullImage={item.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImmageGallery.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object),
};

export default ImmageGallery;
