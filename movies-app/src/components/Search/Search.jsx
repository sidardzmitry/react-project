import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: 'all'
  };

  changeInput = (event) => {
    this.setState({ search: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
      this.setState({ search: "" });
    }
  };
  handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type);
    })
  }

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
            className="btn btn-success"
            type="button"
            onClick={() => {
              this.props.searchMovies(this.state.search, this.state.type);
              this.setState({ search: "" });
            }}
          >
            Search
          </button>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id="inlineRadio1"
            value="option1"
            data-type='all'
            onChange={this.handleFilter}
            checked={this.state.type === 'all'}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            All
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id="inlineRadio2"
            value="option2"
            data-type='movie'
            onChange={this.handleFilter}
            checked={this.state.type === 'movie'}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Movie
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id="inlineRadio3"
            value="option3"
            data-type='series'
            onChange={this.handleFilter}
            checked={this.state.type === 'series'}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Series
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
