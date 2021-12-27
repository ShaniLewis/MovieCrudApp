const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri); 

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        unique: [true, 'This email is already in the system'],
        minlength: 6,
        required: [true, 'Please add your email']
    },
    password: {
        type: String,
        minlength: [2, 'Please make a longer password'],
        required: [true, 'Please add your password']
    }
}, {versionKey: false });

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
           
