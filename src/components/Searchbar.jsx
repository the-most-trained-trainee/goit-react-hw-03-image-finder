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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
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
