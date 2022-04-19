import React from "react";

const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className="col">
      <div className="card h-100" id={id}>
        <img src={poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-dark">{title}</h5>
          <p className="card-text text-dark">
            {year}
            <div className="text-dark">{type}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
