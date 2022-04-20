import React, { useState } from "react";

const Search = (props) => {

  const {searchMovies = Function.prototype} = props;
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')


  const changeInput = (event) => {
    setSearch(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
      setSearch(search(''));
    }
  };
  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  }

    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={changeInput}
            onKeyDown={handleKey}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
              searchMovies(search, type);
              setSearch(search(''));
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
            onChange={handleFilter}
            checked={type === 'all'}
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
            onChange={handleFilter}
            checked={type === 'movie'}
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
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Series
          </label>
        </div>
      </div>
    );
  }

export default Search;
