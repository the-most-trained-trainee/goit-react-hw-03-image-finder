import React from 'react';
import ImmageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { animateScroll as scroll } from 'react-scroll';
import '../styles.css';

class App extends React.Component {
  state = { search: '', pageNo: 1, gallery: [], isLoading: false };

  componentDidUpdate() {
    if (this.state.pageNo > 1) {
      scroll.scrollMore(600);
    } else if (this.state.pageNo === 1) {
      scroll.scrollMore(10);
    }
  }

  searchSubmit = request => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));

    this.setState({ search: request, pageNo: 1, gallery: [] });
    setTimeout(() => {
      this.getGallery();
    }, 50);
  };

  loadMore = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));

    this.setState(prevState => {
      return { pageNo: (prevState.pageNo += 1) };
    });
    setTimeout(() => {
      this.getGallery();
    }, 50);
  };

  totalHits = 1;

  getGallery = async () => {
    const params = {
      key: '29078045-8c2db167d821a84d590b709ce',
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.state.search,
      page: this.state.pageNo,
      per_page: 12,
    };

    const paramsInclude = new URLSearchParams([
      ...Object.entries(params),
    ]).toString();

    const new_url = new URL(`https://pixabay.com/api/?${paramsInclude}`).href;
    const response = await fetch(new_url);
    const responseDisplay = await response.json();

    if (responseDisplay.totalHits === 0) {
      this.setState(prevState => {
        return {
          isLoading: !prevState.isLoading,
        };
      });
      this.totalHits = 1;
      alert("Sorry, but no results found :(");
      return;
    }

    this.totalHits = responseDisplay.totalHits;

    this.setState(prevState => {
      return {
        gallery: prevState.gallery.concat(responseDisplay.hits),
        isLoading: !prevState.isLoading,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.searchSubmit} />
        <ImmageGallery pics={this.state.gallery} />
        <div className="loading">
          <Loader loading={this.state.isLoading} />
        </div>
        {this.totalHits - this.state.pageNo * 12 > 11 && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}

export default App;
