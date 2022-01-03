const router = require('express').Router();
let Movie = require('../models/movie.model.js');

//Get all movies
router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add movie
router.route('/add').post((req, res) => {
  const poster = req.body.poster;
    const plot = req.body.plot;
    const title = req.body.title;
    const directors = req.body.directors;
    const year = req.body.year;
    const type = req.body.type;

  const newMovie = new Movie({
        poster,                                                                                                                                                        
        plot,
        title,
        directors,
        year,
        type,
    });

  newMovie.save()
    .then(() => res.json('Movie added!'))
    .catch(err => res.status(400).json('Add movieError: ' + err));
});

// Find by ID
router.route('/:id').get((req, res) => {
Movie.findById(req.params.id)
  .then(movie => res.json(movie))
  .catch(err => res.status(400).json('Find by ID Error: ' + err));
});

//Delete by ID
router.route('/:id').delete((req, res) => {
Movie.findByIdAndDelete(req.params.id)
  .then(() => res.json('Movie deleted.'))
  .catch(err => res.status(400).json('Delete by ID Error: ' + err));
});

//Update by ID
router.route('/update/:id').post((req, res) => {
Movie.findById(req.params.id)
  .then(movie => {
    movie.poster = req.body.poster;
    movie.title = req.body.title;
    movie.plot = req.body.plot;
    movie.directors = req.body.directors;
    movie.year = req.body.year;
    movie.type = req.body.type;

    movie.save()
      .then(() => res.json('movie updated!'))
      .catch(err => res.status(400).json('Update Error: ' + err));
  })
  .catch(err => res.status(400).json('Update Error: ' + err));
});

module.exports = router;