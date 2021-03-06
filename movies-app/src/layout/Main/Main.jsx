import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import Movies from "..//..//components/Movies/Movies";
import Spinner from "..//..//components/Spinner/Spinner";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search)
      })
      .catch((err) => {
        console.err(err);
        setLoading(false);
      })
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

    return (
            <main className="container">
                <Search searchMovies={searchMovies} />
                {loading ? (
                    <Spinner />
                ) : (
                    <Movies movies={movies} />
                )}
            </main>
    );
  }

export default Main;
