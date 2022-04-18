import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  changeInput = (event) => {
    this.setState({ search: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
        this.props.searchMovies(this.state.search);
    }
  };
  handleBtn = () => {
      this.props.searchMovies(this.state.search);
  }

  render() {
    return (
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={this.state.search}
          onChange={this.changeInput}
          onKeyDown={this.handleKey}
        />
        <button 
        className="btn btn-success" 
        type='submit'
        onClick={this.handleBtn}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
