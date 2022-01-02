const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri); 

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    plot: {
        type: String,
        required: [true, 'Please add plot']
    },
    title: {
        type: String,
        required: [true, 'Please add title']
    },
    directors: {
        type: Array,
        required: [true, 'Please add director(s) name(s)']
    },
    year: {
        type: Number,
        required: [true, 'Please add year released']
    },
    type: {
        type: String,
    }
},{ versionKey: false });
const Movie = mongoose.model('Movie', movieSchema, 'movies');

module.exports = Movie;
           