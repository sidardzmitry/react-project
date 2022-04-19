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
      this.setState({ search: "" });
    }
  };

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            value={this.state.search}
            onChange={this.changeInput}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              this.props.searchMovies(this.state.search);
              this.setState({ search: "" });
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
