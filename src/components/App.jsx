import React from 'react';
import ImmageGallery from './ImageGallery';
import Searchbar from './Searchbar';

class App extends React.Component {
  state = { search: '', gallery: [] };

  PIXABAY_KEY = '29078045-8c2db167d821a84d590b709ce';

  async componentDidUpdate(prevProps, prevState, snapshot) {
    this.setState({ gallery: await this.getGallery() });
  }

  getGallery = async () => {
    const params = {
      key: this.PIXABAY_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.state.search,
      page: 1,
      per_page: 12,
    };
    const paramsToAdd = new URLSearchParams([
      ...Object.entries(params),
    ]).toString();
    const new_url = new URL(`https://pixabay.com/api/?${paramsToAdd}`).href;
    const response = await fetch(new_url);
    const responseDisplay = await response.json();
    console.log(responseDisplay);
    return responseDisplay.hits;
  };

  searchSubmit = request => {
    this.setState({ search: request });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit} />
        {this.state.gallery.length > 0 && (
          <ImmageGallery pics={this.state.gallery} />
        )}
      </div>
    );
  }
}

export default App;
