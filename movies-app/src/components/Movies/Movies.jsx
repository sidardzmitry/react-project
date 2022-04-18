import React from "react";
import Movie from "../Movie/Movie";

const Movies = (props) => {
  const { movies } = props;

  return (
    <div className="row row-cols-3 row-cols-md-4 g-4">
        {movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })}
    </div>
  );
};

export default Movies;
