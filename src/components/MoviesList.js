import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movie = props => (
  <tr>
    <td>{props.movie.title}</td>
    <td>{props.movie.plot}</td>
    <td>{props.movie.directors}</td>
    <td>{props.movie.year}</td>
    <td>{props.movie.type}</td>

    <td>
      <Link to={"/edit/"+props.movie._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMovie(props.movie._id) }}>delete</a>
    </td>
  </tr>
)

export default class moviesList extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this)

    this.state = {movies: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/movies/')
      .then(response => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMovie(id) {
    axios.delete('http://localhost:5000/movies/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      movies: this.state.movies.filter(el => el._id !== id)
    })
  }

  moviesList() {
    return this.state.movies.map(currentmovie => {
      return <Movie movie={currentmovie} deleteMovie={this.deleteMovie} key={currentmovie._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Movies</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Plot</th>
              <th>Directors</th>
              <th>Year</th>
              <th>Type</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            { this.moviesList() }
          </tbody>
        </table>
      </div>
    )
  }
}