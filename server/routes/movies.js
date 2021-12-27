const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const plot = req.body.plot;
    const title = req.body.title;
    const directors = req.body.directors;
    const year = req.body.year;
    const type = req.body.type;

    const newMovie = new Movie({
        plot,
        title,
        directors,
        year,
        type,
    });

  newMovie.save()
    .then(() => res.json('Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;