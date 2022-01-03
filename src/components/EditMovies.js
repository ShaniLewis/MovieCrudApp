import React, { Component } from 'react';
import axios from 'axios';

export default class EditMovies extends Component {
  constructor(props) {
    super(props);
    
    this.onChangePoster = this.onChangePoster.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePlot = this.onChangePlot.bind(this);
    this.onChangeDirectors = this.onChangeDirectors.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      poster: '',
      title: '',
      plot: '',
      directors: [],
      year: 0,
      type: '',
      movies: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/movies/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          poster: response.data.poster,
          title: response.data.title,
          plot: response.data.plot,
          directors: response.data.directors,
          year: response.data.year,
          type: response.data.type,

        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/movies/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            movies: response.data.map(movie => movie.title),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangePoster(e) {
    this.setState({
      poster: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangePlot(e) {
    this.setState({
      plot: e.target.value
    })
  }

  onChangeDirectors(e) {
    this.setState({
      directors: e.target.value
    })
  }

  onChangeYear(e) {
      this.setState({
    year: e.target.value

    })
    }
    onChangeType(e) {
        this.setState({
      type: e.target.value
  
      })
    }


  onSubmit(e) {
    e.preventDefault();

    const movie = {
      poster: this.state.poster,
      title: this.state.title,
      plot: this.state.plot,
      directors: this.state.directors,
      year: this.state.year,
      type: this.state.type

    }

    console.log(movie);

    axios.post('http://localhost:5000/movies/update/' + this.props.match.params.id, movie)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
          <div className="form-group">    
          
          <label>Poster Image Link</label>
            <input 
                type="text"
                className="form-control"
              value={this.state.poster}
              onChange={this.onChangePoster}>
          </input>
          </div>
          
          <div className="preview"> 
            <label> Poster Image Preview:</label>
            <br></br>
            <img src={this.state.poster}
              with="100px" alt="" />
          </div>

            <div className="form-group">    
          <label>Title</label>
            <input 
                type="text"
                className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}>
          </input>
            </div>
                
        <div className="form-group"> 
          <label>Plot</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.plot}
              onChange={this.onChangePlot}
              />
        </div>
        <div className="form-group">
          <label>Directors</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.directors}
              onChange={this.onChangeDirectors}
              />
        </div>

        <div className="form-group">
          <label>Year</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}