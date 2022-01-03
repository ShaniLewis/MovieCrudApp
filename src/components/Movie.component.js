import React, { Component } from 'react';
import axios from 'axios';

export default class Movie extends Component {
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
          year: '',
          type: '',
          movies: []
      }
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
    //prevents the default HTML form submit behavior from taking place.
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

    axios.post('http://localhost:5000/movies/add', movie)
        .then(res => console.log(res.data))
        .then(window.location = '/moviesList');
      console.log("Movie Added!");
  }

  render() {
    return (
    <div>
      <h3>Create New Movie Log</h3>
      <form onSubmit={this.onSubmit}>

      <div className="form-group"> 
          <label>Poster</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.poster}
              onChange={this.onChangePoster}
            />
          </div>
          
          <div className="preview"> 
            <label> Poster Image Preview:</label>
            <br></br>
            <img src={this.state.poster}
              with="100px" alt="Image link Invalid" />
          </div>
          
        <div className="form-group"> 
          <label>Title</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        
        <div className="form-group">
          <label>Plot</label>
          <input 
              type="text" 
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
          <label>Type</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
              />
          </div>
          

        <div className="form-group">
          <input type="submit" value="Create Movie Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}