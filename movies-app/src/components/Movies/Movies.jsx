import React from "react";
import Movie from "../Movie/Movie";

const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <div className="row row-cols-3 row-cols-md-4 g-4">
        {movies.length ? (
          movies.map((movie) => 
            <Movie key={movie.imdbID} {...movie} />)
        ) : (<h3>Ничего не найдено</h3>
        )}
    </div>
  );
};

export default Movies;
