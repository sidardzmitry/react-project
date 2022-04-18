import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Movies from "..//..//components/Movies/Movies";
import Spinner from "..//..//components/Spinner/Spinner";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=951b9588&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=951b9588&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container">
      <Search searchMovies={this.searchMovies}/>
        {movies.length ? <Movies movies={this.state.movies} /> : <Spinner />}
      </main>
    );
  }
}

export default Main;
