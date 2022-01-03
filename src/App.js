import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component.js";
import Movie from "./components/Movie.component.js";
import User from "./components/User.component.js";
import Home from "./components/Home.js";
import MoviesList from "./components/MoviesList.js";
import EditMovies from "./components/EditMovies.js";
 
function App(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movie} />
        <Route path="/users" component={User} />
        <Route path="/moviesList" component={MoviesList} />
        <Route path= "/edit/:id" component={EditMovies} />
        </Switch>
  </Router>
  );
}

export default App;
