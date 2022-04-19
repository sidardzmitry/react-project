import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Movies from "..//..//components/Movies/Movies";
import Spinner from "..//..//components/Spinner/Spinner";

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  searchMovies = (str) => {
    this.setState({loading: true});
    fetch(`http://www.omdbapi.com/?apikey=951b9588&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=951b9588&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    return (
            <main className="container">
                <Search searchMovies={this.searchMovies} />
                {loading ? (
                    <Spinner />
                ) : (
                    <Movies movies={movies} />
                )}
            </main>
    );
  }
}

export default Main;
