import React from 'react';

class Searchbar extends React.Component {
  state = { searchInput: '' };

  handleChange = e => this.setState({ searchInput: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchInput);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
