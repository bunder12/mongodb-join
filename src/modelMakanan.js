const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    nama: String,
});

module.exports = mongoose.model('Makanan', userSchema);