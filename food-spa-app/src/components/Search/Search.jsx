import React, { useState } from "react";

const Search = (props) => {
  const { callBack = Function.prototype } = props;
  const [value, setValue] = useState("");

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        callBack(value)
    }



  return (
    <div className="input-group mb-3">
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        id="search-field"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
