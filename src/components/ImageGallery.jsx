import React from 'react';
import GalleryItem from './ImageGalleryItem';

class ImmageGallery extends React.Component {
  state = {
    gallery: '',
  };

  static PIXABAY_KEY = '29078045-8c2db167d821a84d590b709ce';

  getGallery = async () => {
    const params = {
      key: ImmageGallery.PIXABAY_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.props.searchRequest,
      page: 1,
      per_page: 12,
    };

    const paramsToAdd = new URLSearchParams([
      ...Object.entries(params),
    ]).toString();

    const new_url = new URL(`https://pixabay.com/api/?${paramsToAdd}`).href;

    const response = await fetch(new_url);
    const responseDisplay = await response.json();

    return responseDisplay.hits;
  };

  async componentDidMount() {
    const galleryToAdd = await this.getGallery();
    this.setState({ gallery: galleryToAdd });

 
  }

  render() {
    return (
      <ul className="gallery">
        {this.state.gallery.length > 0 && this.state.gallery.map(item => (<GalleryItem image={item.webformatURL} />))}
      </ul>
    );
  }
}

export default ImmageGallery;
