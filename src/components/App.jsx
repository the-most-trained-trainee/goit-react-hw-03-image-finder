import React from 'react';
import ImmageGallery from './ImageGallery';
import Searchbar from './Searchbar';


class App extends React.Component {
  state = { search: '' };

  searchSubmit = e => {
    this.setState({ search: e });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit} />
        <ImmageGallery searchRequest={this.state.search}/>
      </div>
    );
  }
}

export default App;
